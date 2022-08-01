import { Module } from '@nestjs/common';
import { BranchOfficeService } from './branch-office.service';
import { BranchOfficeController } from './branch-office.controller';
import { BranchOfficeEntity } from './entities/branch-office.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BranchOfficeController],
  imports: [
    TypeOrmModule.forFeature([BranchOfficeEntity])
  ],
  providers: [BranchOfficeService],
  exports: [
    BranchOfficeService,
    TypeOrmModule
  ]
})
export class BranchOfficeModule {}
