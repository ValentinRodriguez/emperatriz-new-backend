import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { CreateMovementDTO } from '../dto/create-movement.input';

@Entity()
export class MovementEntity extends CreateMovementDTO{

  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
}
