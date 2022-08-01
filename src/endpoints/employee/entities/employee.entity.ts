import { Entity, PrimaryGeneratedColumn } from "typeorm"
import { EmployeeCreateDTO } from "../dto/create-employee.dto"

@Entity()
export class EmployeeEntity extends EmployeeCreateDTO{
    @PrimaryGeneratedColumn()
    id: string

}