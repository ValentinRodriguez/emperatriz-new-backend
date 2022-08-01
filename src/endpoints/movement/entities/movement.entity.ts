import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { CreateMovementDTO } from '../dto/create-movement.input';

@Entity({ name: 'movements' })
export class Movements extends CreateMovementDTO{

  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
}
