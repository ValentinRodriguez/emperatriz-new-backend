import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { CreateModuleDto } from "../dto/create-module.dto";

@Entity({ name: 'modules' })
export class ModuleEntity extends CreateModuleDto{
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: string;

}
