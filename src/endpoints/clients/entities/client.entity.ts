import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateClientDTO } from '../dto/create-client.input';

@Entity()
export class ClientEntity extends CreateClientDTO{
  @PrimaryGeneratedColumn()
  id: string;
}
