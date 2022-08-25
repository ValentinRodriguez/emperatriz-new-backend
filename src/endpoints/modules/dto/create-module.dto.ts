import { IsArray } from "class-validator";
import { Column } from "typeorm";
import { GlobalEntity } from "../../../common/entity/entity";
import { IsGlobalString } from "../../../endpoints/auth/decorators";

export interface Programs {
    id: string;
    label: string;
    icon: string;
    routerLink: string;
    descripcion: string;
}

export class CreateModuleDto extends GlobalEntity {
    @IsGlobalString()
    @Column()
    label: string;

    @IsGlobalString()
    @Column()
    icon: string;

    @IsGlobalString()
    @IsArray()
    @Column('text', { array: true })
    programs: Programs[];
}
