import { IsString } from 'class-validator';
import { CreateCategoryDTO } from './create-category.input';

export class UpdateCategoryDTO extends CreateCategoryDTO {
  @IsString()
  id: string;
}
