
import { Column, Generated } from "typeorm";
import { IsEnum, IsIn, IsOptional } from "class-validator";
import { getDateTime } from "../../utils/date.utils";
import { YesNo } from "../../utils/global-table-enum";


export enum Status {
    Active = 'active',
    Deactive = 'deactive',
}

export abstract class GlobalEntity {

    @Column({nullable: true})
    @Generated('increment')
    identity?: number;
    
    @Column({ type: 'enum', enum: Status, default: Status.Active, nullable: true })
    @IsEnum(Status)
    @IsIn([Status.Active, Status.Deactive])
    @IsOptional()
    status?: string;

    @Column({ type: 'enum', enum: YesNo, default: YesNo.YES, nullable: true })
    @IsEnum(YesNo)
    @IsIn([YesNo.YES, YesNo.NO])
    @IsOptional()
    removable: string;

    @Column({ nullable: true, default: getDateTime() })
    @IsOptional()
    created_at: string;
    
    @Column({ nullable: true })
    @IsOptional()
    created_by: string;

    @Column({ nullable: true })
    @IsOptional()
    updated_at: string;

    @Column({ nullable: true })
    @IsOptional()
    updated_by: string;
    
    @Column({ nullable: true })
    @IsOptional()
    deleted_at: string;

    @Column({ nullable: true })
    @IsOptional()
    deleted_by: string;
}