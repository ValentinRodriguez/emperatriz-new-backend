import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { META_ROLES } from '../decorators/role-protected.decorator';
import { Users } from '../entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {
  
  constructor(
    private readonly reflector: Reflector
  ) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const acceptedRoles: string[] = this.reflector.get( META_ROLES , context.getHandler() )

    if ( !acceptedRoles ) return true;
    if ( acceptedRoles.length === 0 ) return true;
    
    const req = context.switchToHttp().getRequest();
    const user = req.user as Users;

    // console.log(user.roles);

    throw new Error( `User ${ user.firstname } ${ user.lastname } need a valid role to access this endpoint` );    
    
  }
}
