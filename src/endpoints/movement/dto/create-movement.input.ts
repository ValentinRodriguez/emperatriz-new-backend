import { IsString } from 'class-validator';
import { GlobalEntity } from 'src/common/entity/entity';
import { Column } from 'typeorm';
import { YesNo } from '../../../utils/global-table-enum';


export class CreateMovementDTO extends GlobalEntity{
  @IsString()
  @Column()
  title_movement:string;

  @IsString()
  @Column()
  origin_movement:string;

  @IsString()
  @Column({nullable: true})
  movement_type_transferId:string; 

  @IsString()
  @Column()
  formarray_account_movement:string;                

  @IsString()
  @Column()
  description_movement:string;

  @IsString()
  @Column({ default: YesNo.NO})     
  client_control_movement:string;  

  @IsString()
  @Column({ default: YesNo.NO})    
  dispatch_control_movement:string;  

  @IsString()
  @Column({ default: YesNo.NO})   
  department_control_movement:string; 

  @IsString()
  @Column({ default: YesNo.NO})
  refund_control_movement:string;

  @IsString()
  @Column({ default: YesNo.NO})
  transfer_control_movement:string; 

  @IsString()
  @Column({ default: YesNo.NO}) 
  buy_order_control_movement:string;    
}
