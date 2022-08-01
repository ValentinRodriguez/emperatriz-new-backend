import { BadRequestException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Users } from './entities/user.entity';
import { LoginUserDto, CreateUserDto } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {

  private readonly logger = new Logger('AuthService');
  
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

    private readonly jwtService: JwtService,
  ) {}


  async create( createUserDto: CreateUserDto) {
    
    try {      
      const user = this.userRepository.create(createUserDto);

      await this.userRepository.save( user )
      delete user.password;

      return {
        ...user,
        token: this.getJwtToken({ id: user.id })
      };

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

  async login( loginUserDto: LoginUserDto ) {

    const { password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true } //! OJO!
    });

    if ( !user ) 
      throw new UnauthorizedException('Credentials are not valid (email)');
      
    if ( !bcrypt.compareSync( password, user.password ) )
      throw new UnauthorizedException('Credentials are not valid (password)');

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };
  }

  async checkAuthStatus( user: Users ){

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };

  }


  
  private getJwtToken( payload: JwtPayload ) {
    const token = this.jwtService.sign( payload );
    return token;

  }

  private handleDBErrors( error: any ): never {


    if ( error.code === '23505' ) 
      throw new BadRequestException( error.detail );

    console.log(error)

    throw new InternalServerErrorException('Please check server logs');

  }

  async deleteAllData() {
    const query = this.userRepository.createQueryBuilder('users');

    try {
      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {
      this.handleDBExceptions(error);
    }

  }

  private handleDBExceptions( error: any ) {
    if ( error.code === '23505' ) throw new BadRequestException(error.detail);
    
    this.logger.error(error)
    console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }


}
