import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';
import { Column } from 'typeorm';

export class CreateProductTypeDTO extends GlobalEntity {
  @IsString()
  @Column()
  title_productType: string;


}
