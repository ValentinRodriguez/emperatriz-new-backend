
import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from 'src/common/entity/entity';

export class CreateWarehouseDTO extends GlobalEntity {
  @IsString()
  @Column()
  title_warehouse: string;

  @IsString()
  @Column()
  description_warehouse: string;
}
