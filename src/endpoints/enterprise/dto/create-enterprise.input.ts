import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateEnterpriseDTO extends GlobalEntity {
  
  @IsString()
  @Column()
  enterprise_name:string

  @IsString()
  @Column()
  enterprise_document_type:string

  @IsString()
  @Column()
  dni:string

  @IsString()
  @Column()
  rnc:string

  @IsString()
  @Column()
  enterprise_phone:string

  @IsString()
  @Column()
  enterprise_email:string
}
