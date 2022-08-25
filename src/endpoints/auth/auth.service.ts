import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Crud } from 'src/common/crud';
import { ResponseAPI } from 'src/common/response/response';
import { CreateUserDto, LoginUserDto } from './dto';
import { Users } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService extends Crud{
  
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {
    super(userRepository);
  }

  async create( createUserDto: CreateUserDto) {
    
    try {      
      const user = this.userRepository.create(createUserDto);

      await this.userRepository.save( user )
      delete user.password;

      return new ResponseAPI(200, 'Successful', this.getJwtToken({ id: user.id }));

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async login( loginUserDto: LoginUserDto ) {

    const { password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password:true, id: true }
    });

    if ( !user ) throw new UnauthorizedException('Credentials are not valid (email)');      
    if ( !bcrypt.compareSync( password, user.password ) ) throw new UnauthorizedException('Credentials are not valid (password)');
    
    delete user.password;
    
    return new ResponseAPI(200, 'Successful', this.getJwtToken({ id: user.id }))
  }
  
  private getJwtToken( payload: JwtPayload ) {
    return this.jwtService.sign( payload );  
  }

  // async deleteAllData() {
  //   const query = this.userRepository.createQueryBuilder('users');

  //   try {
  //     return await query
  //       .delete()
  //       .where({})
  //       .execute();
  //   } catch (error) {
  //     this.handleDBExceptions(error);
  //   }
  // }

}
