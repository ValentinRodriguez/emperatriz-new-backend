
import { Column, Generated } from "typeorm";
import { IsEnum, IsIn } from "class-validator";
import { getDateTime } from "../../utils/date.utils";
import { YesNo } from "../../utils/global-table-enum";


export enum Status {
    Active = 'active',
    Deactive = 'deactive',
}

export class GlobalEntity {

    @Column({nullable: true})
    @Generated('increment')
    identity?: number;
    
    @Column({ type: 'enum', enum: Status, default: Status.Active, nullable: true })
    @IsEnum(Status)
    @IsIn([Status.Active, Status.Deactive])
    status: string;

    @Column({ type: 'enum', enum: YesNo, default: YesNo.YES, nullable: true })
    @IsEnum(YesNo)
    @IsIn([YesNo.YES, YesNo.NO])
    removable: string;

    @Column({ nullable: true, default: getDateTime() })
    created_at: string;
    
    @Column({ nullable: true })
    created_by: string;

    @Column({ nullable: true })
    updated_at: string;

    @Column({ nullable: true })
    updated_by: string;
    
    @Column({ nullable: true })
    deleted_at: string;

    @Column({ nullable: true })
    deleted_by: string;
}