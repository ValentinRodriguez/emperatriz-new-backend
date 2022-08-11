import { Controller, Get, Post, Body, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { IncomingHttpHeaders } from 'http';
import { ResponseAPI } from 'src/common/response/response';

import { AuthService } from './auth.service';
import { RawHeaders, GetUser, IsPublic } from './decorators';
import { RoleProtected } from './decorators/role-protected.decorator';

import { CreateUserDto, LoginUserDto } from './dto';
import { Users } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidRoles } from './interfaces';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @IsPublic()
  createUser(@Body() createUserDto: CreateUserDto ) {
    return this.authService.create( createUserDto );
  }

  @Post('login')
  @IsPublic()
  loginUser(@Body() loginUserDto: LoginUserDto ) {
    return this.authService.login( loginUserDto );
  }
  
  @Get()  
  findAll() {
    return this.authService.findAllRegisters();
  }

  @Get('whoami')
  privateRoute3(
    @GetUser() user: Users
  ) {
    return new ResponseAPI(200, 'Success', user);
  }

  // @Get('private')
  // @UseGuards( AuthGuard() )
  // testingPrivateRoute(
  //   @Req() request: Express.Request,
  //   @GetUser() user: Users,
  //   @GetUser('email') userEmail: string,    
  //   @RawHeaders() rawHeaders: string[],
  //   @Headers() headers: IncomingHttpHeaders,
  // ) {

  //   return {
  //     ok: true,
  //     message: 'Hola Mundo Private',
  //     user,
  //     userEmail,
  //     rawHeaders,
  //     headers
  //   }
  // }

  // @SetMetadata('roles', ['admin','super-user'])
  // @Get('private2')
  // @RoleProtected( ValidRoles.SUPER_ADMIN, ValidRoles.ADMIN )
  // @UseGuards( AuthGuard(), UserRoleGuard )
  // privateRoute2(
  //   @GetUser() user: Users
  // ) {

  //   return {
  //     ok: true,
  //     user
  //   }
  // }






}
