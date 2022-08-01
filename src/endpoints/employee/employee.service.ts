import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';
import { Message } from '../../utils/messages';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) { }

    async findAll(): Promise<EmployeeEntity[]>{
        return this.employeeRepository.find();
    }

    async findOne (id: string) {
        // return this.employeeRepository.findOne(id)
    }

    async create(employee:EmployeeCreateDTO): Promise<EmployeeEntity>{
        let emp=this.employeeRepository.create(employee);
        return this.employeeRepository.save(emp);
    }

    async update(id: string, attrs: Partial<EmployeeCreateDTO>) {
        const employee = await this.findOne(id);
        
        // if (!employee) throw new ForbiddenException(Message.EMPLOYEE_NOT_FOUND);
        
        // Object.assign(employee, attrs);
        // return this.employeeRepository.save(employee);
    }
}
