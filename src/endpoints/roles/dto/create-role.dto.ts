import { IsArray } from "class-validator";
import { Column } from "typeorm";
import { GlobalEntity } from "../../../common/entity/entity";
import { IsGlobalString } from "../../../endpoints/auth/decorators";

export interface RolesPrograms {   
    module: Access;
    programs: Access[];
}

interface Access {
    label: string;
    icon?: string;
    routerLink?: string;
    write: boolean;
    read: boolean;
}

export class CreateRoleDto extends GlobalEntity{
    @IsGlobalString()
    @IsArray()
    @Column('text')
    roles: RolesPrograms;
}
