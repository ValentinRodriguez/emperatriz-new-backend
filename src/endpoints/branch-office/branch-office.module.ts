import { Module } from '@nestjs/common';
import { BranchOfficeService } from './branch-office.service';
import { BranchOfficeController } from './branch-office.controller';
import { BranchOffice } from './entities/branch-office.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BranchOfficeController],
  imports: [
    TypeOrmModule.forFeature([BranchOffice])
  ],
  providers: [BranchOfficeService],
  exports: [
    BranchOfficeService,
    TypeOrmModule
  ]
})
export class BranchOfficeModule {}
