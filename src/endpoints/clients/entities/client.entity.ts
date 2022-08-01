import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateClientDTO } from '../dto/create-client.input';

@Entity( {name:'clients'} )
export class Clients extends CreateClientDTO{
  @PrimaryGeneratedColumn()
  id: string;
}
