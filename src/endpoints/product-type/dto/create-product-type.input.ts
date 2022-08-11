import { GlobalEntity } from '../../../common/entity/entity';
import { Column } from 'typeorm';
import { IsGlobalString } from 'src/endpoints/auth/decorators';

export class CreateProductTypeDTO extends GlobalEntity {
  @IsGlobalString({ minLength: 1 })
  @Column()
  title: string;


}
