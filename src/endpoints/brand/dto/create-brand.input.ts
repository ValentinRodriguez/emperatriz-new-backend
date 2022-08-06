import { Column } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';
import { IsGlobalString } from '../../../endpoints/auth/decorators';

export class CreateBrandInput extends GlobalEntity {
  @IsGlobalString({ minLength: 1 })
  @Column()
  title: string;
}
