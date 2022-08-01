import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Users } from '../entities/user.entity';
import { META_ROLES } from '../decorators/role-protected.decorator';
import { ValidRoles } from '../interfaces';

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

    if ( !user ) throw new BadRequestException('User not found');

    for (const role of user.roles ) {      
      if ( acceptedRoles.includes( role ) || role === ValidRoles.SUPER_ADMIN ) return true;      
    }
    
    throw new ForbiddenException(
      `User ${ user.firstname } ${ user.lastname } need a valid role: [${ acceptedRoles }]`
    );
  }
}
