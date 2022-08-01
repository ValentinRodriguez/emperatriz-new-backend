import { IsString } from 'class-validator';
import { Column } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateClientDTO extends GlobalEntity{
  @IsString()
  @Column()
  client_name:string;
  
  @IsString()
  @Column()
  client_document_type:string;
    
  @IsString()
  @Column()
  client_document:string;
  
  @IsString()
  @Column()
  client_credit_limit:string;
    
  @IsString()
  @Column()
  ncf:string;
    
  @IsString()
  @Column()
  client_address:string;
    
  @IsString()
  @Column()
  client_nationality:string;
  
  @IsString()
  @Column()
  client_phone:string;
    
  @IsString()
  @Column()
  client_email:string;
  
  @IsString()
  @Column()
  client_type:string;
  
  @IsString()
  @Column()
  client_condition_pay:string;
  
  @IsString()
  @Column()
  client_url:string;
}
