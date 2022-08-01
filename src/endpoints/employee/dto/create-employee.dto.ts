import { Column } from "typeorm"
import { IsString } from "class-validator"
import { GlobalEntity } from "../../../common/entity/entity"

export class EmployeeCreateDTO extends GlobalEntity{
    @IsString()
    @Column ()
    firstName: string

    @IsString()
    @Column ()
    lastName: string
}