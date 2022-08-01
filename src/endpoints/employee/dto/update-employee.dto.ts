import { IsString } from "class-validator";
import { EmployeeCreateDTO } from "./create-employee.dto";

export class EmployeeUpdateDTO extends EmployeeCreateDTO{

    @IsString()
    id: string;
}