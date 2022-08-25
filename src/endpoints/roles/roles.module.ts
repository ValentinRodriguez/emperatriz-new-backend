import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([RoleEntity])
  ],
  providers: [RolesService]
})
export class RolesModule {}
