import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleEntity } from './entities/module.entity';

@Module({
  controllers: [ModulesController],
  imports: [
    TypeOrmModule.forFeature([ModuleEntity])
  ],
  providers: [ModulesService]
})
export class ModulesModule {}
