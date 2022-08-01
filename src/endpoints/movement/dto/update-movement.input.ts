import { IsString } from 'class-validator';
import { CreateMovementDTO } from './create-movement.input';


export class UpdateMovementInput extends CreateMovementDTO  {
  @IsString()
  id:string;  
 
}
