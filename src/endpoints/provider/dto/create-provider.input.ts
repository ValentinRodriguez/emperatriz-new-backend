
import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateProviderDTO extends GlobalEntity {
  
  @IsString()
  @Column({unique: true})
  provider_name: string;

  @IsString()
  @Column()
  email_provider: string;

  @IsString()
  @Column()
  contact_sp: string;

  @IsString()
  @Column()
  phone_sp: string;

  @IsString()
  @Column()
  document_type: string;
  
  @IsString()
  @Column({unique: true})
  document_id: string;

  @IsString()
  @Column()
  payment_condition: string;

  @IsString()
  @Column()
  currency_provider: string;

  @IsString()
  @Column()
  address_provider: string;

  @IsString()
  @Column()
  account_accountant: string;
}
