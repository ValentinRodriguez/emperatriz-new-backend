import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.Controller';
import { EnterpriseEntity } from './entities/enterprise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EnterpriseController],
  imports: [
    TypeOrmModule.forFeature([EnterpriseEntity])
  ],
  providers: [EnterpriseService],
  exports: [
    EnterpriseService,
    TypeOrmModule
  ]
})
export class EnterpriseModule {}
