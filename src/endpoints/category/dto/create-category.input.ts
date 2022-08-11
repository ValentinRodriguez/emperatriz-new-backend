import { Column } from 'typeorm';
import { IsGlobalString } from '../../../endpoints/auth/decorators';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateCategoryDTO extends GlobalEntity {
  @IsGlobalString({ minLength: 1 })
  @Column()
  title: string;
}
