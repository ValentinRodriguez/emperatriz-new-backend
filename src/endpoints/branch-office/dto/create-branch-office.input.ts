import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateBranchOfficeDTO extends GlobalEntity {
  @IsString()
  @Column()
  branch_description:string;

  @IsString()
  @Column()
  branch_addres:string;
}
