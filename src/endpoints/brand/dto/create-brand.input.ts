import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateBrandInput extends GlobalEntity {
  @IsString()
  @Column()
  title_brand: string;
}
