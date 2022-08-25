import { IsString } from "class-validator";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "../../../endpoints/auth/entities/user.entity";
import { CreateRoleDto } from "../dto/create-role.dto";

@Entity({ name: 'role' })
export class RoleEntity extends CreateRoleDto{
    
    @Column()
    @IsString()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Users, (user) => user.roles)
    user: Users
}
