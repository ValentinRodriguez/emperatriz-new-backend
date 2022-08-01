import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './entities/employee.entity';


@Module({
  controllers: [EmployeeController],
  imports: [
    TypeOrmModule.forFeature([Employees])
  ],	
  providers: [EmployeeService]
})
export class EmployeeModule {}
