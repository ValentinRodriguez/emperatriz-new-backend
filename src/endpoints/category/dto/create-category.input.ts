import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateCategoryDTO extends GlobalEntity {
  @IsString()
  @Column()
  title_category: string;
}
