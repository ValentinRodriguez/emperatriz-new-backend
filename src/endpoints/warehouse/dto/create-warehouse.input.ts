
import { Column } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';
import { IsGlobalString } from '../../../endpoints/auth/decorators';

export class CreateWarehouseDTO extends GlobalEntity {
  @IsGlobalString({ minLength: 1 })
  @Column()
  title: string;

  @IsGlobalString({ minLength: 1 })
  @Column()
  description_warehouse: string;
}
