import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleEntity } from './entities/module.entity';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';

@Module({
  controllers: [ModulesController],
  imports: [
    TypeOrmModule.forFeature([ModuleEntity])
  ],
  providers: [ModulesService]
})
export class ModulesModule {}
