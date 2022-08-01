import { CreateClientDTO } from './create-client.input';
import { IsString } from 'class-validator';

export class UpdateClientDTO extends CreateClientDTO {
  @IsString()
  id: string;
}
