import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateProviderDTO } from '../dto/create-provider.input';

@Entity({ name: 'providers' })
export class Providers extends CreateProviderDTO{
  
  @IsString()
  @PrimaryGeneratedColumn('uuid')
  id: string

}
