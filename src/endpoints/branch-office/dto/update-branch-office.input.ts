import { IsString } from 'class-validator';
import { CreateBranchOfficeDTO } from './create-branch-office.input';

export class UpdateBranchOfficeInput extends CreateBranchOfficeDTO {
  @IsString()
  id: string;
}
