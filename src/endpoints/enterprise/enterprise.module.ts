import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.Controller';
import { Enterprises } from './entities/enterprise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EnterpriseController],
  imports: [
    TypeOrmModule.forFeature([Enterprises])
  ],
  providers: [EnterpriseService],
  exports: [
    EnterpriseService,
    TypeOrmModule
  ]
})
export class EnterpriseModule {}
