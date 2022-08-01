import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateProviderDTO } from '../dto/create-provider.input';

@Entity()
export class ProviderEntity extends CreateProviderDTO{
  
  @IsString()
  @PrimaryGeneratedColumn()
  id: string

}
