import { Column } from 'typeorm';
import { YesNo } from '../../../utils/global-table-enum';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';



export class CreateInventoryTransactionDTO extends GlobalEntity{
  @IsString()
  @Column()
  id_movement_type:string;

  @IsString()
  @Column({nullable: true})
  id_buy_order_number:string;  

  @IsString()
  @Column({nullable: true})
  bill:string;

  @IsString()
  @Column({nullable: true})
  quotation:string;

  @IsString()
  @Column({nullable: true})
  client_type :string;

  @IsString()
  @Column({nullable: true})
  documentId :string;

  @IsString()
  @Column({default: YesNo.NO})
  condition_receipt:string;

  @IsString()
  @Column({nullable: true})
  warehouseId:string;

  @IsString()
  @Column({nullable: true})
  warehouseDestinationId:string;

  @IsString()
  @Column({nullable: true})
  id_seller:string; 

  @IsString()
  @Column({nullable: true})
  entrance_movement_code:string; 

  @IsString()
  @Column({nullable: true})  
  departament:string; 

  @IsString()
  @Column({nullable: true})
  departament_name :string;

  @IsString()
  @Column({nullable: true})
  employeeId :string;

  @IsString()
  @Column({nullable: true})
  account_number:string;

  @IsString()
  @Column({nullable: true})
  account_description:string;

  @IsString()
  @Column({nullable:true})  
  name_received_by:string;

  @IsString()
  @Column({nullable:true})  
  signature_received_by:string;

  @IsString()
  @Column({nullable:true})  
  delivered_name_by :string;

  @IsString()
  @Column({nullable:true})  
  signature_delivered_by :string;

  @IsString()
  @Column({nullable:true})  
  movement_type_transferId:string;

  @IsString()
  @Column()     
  client_control_movement:string;  

  @IsString()
  @Column()    
  dispatch_control_movement:string;  

  @IsString()
  @Column()   
  department_control_movement:string; 

  @IsString()
  @Column()
  refund_control_movement:string;

  @IsString()
  @Column()
  transfer_control_movement:string; 

  @IsString()
  @Column() 
  buy_order_control_movement:string;  

  @IsString()
  @Column({nullable: true})
  id_provider:string;    

  @IsString()
  @Column()
  origin:string;

  @IsString()
  @Column()
  transaction_date:string;

  @IsString()
  @Column({nullable: true})
  address:string;

  @IsString()
  @Column({nullable: true})
  document_type:string;

  @IsString()
  @Column({nullable: true})
  id_carrier:string;    

  @IsString()
  @Column({nullable: true})
  carrier_rate:string;

  @IsString()
  @Column({nullable: true})
  license_plate:string;

  @IsString()
  @Column({nullable: true})
  comment:string;

  @IsString()
  @Column({nullable: true})
  products:string;
}
