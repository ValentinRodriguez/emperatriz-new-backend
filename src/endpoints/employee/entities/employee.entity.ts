import { Entity, PrimaryGeneratedColumn } from "typeorm"
import { EmployeeCreateDTO } from "../dto/create-employee.dto"

@Entity({ name: "employees" })
export class Employees extends EmployeeCreateDTO{
    @PrimaryGeneratedColumn()
    id: string

}