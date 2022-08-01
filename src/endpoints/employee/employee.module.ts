import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './entities/employee.entity';


@Module({
  controllers: [EmployeeController],
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity])
  ],	
  providers: [EmployeeService]
})
export class EmployeeModule {}
