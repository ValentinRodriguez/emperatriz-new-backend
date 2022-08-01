import { IsString } from 'class-validator';
import { Column } from 'typeorm';
import { CreateEnterpriseDTO } from './create-enterprise.input';

export class UpdateEnterpriseInput extends CreateEnterpriseDTO {
  @Column()
  @IsString()
  id: string;
}
