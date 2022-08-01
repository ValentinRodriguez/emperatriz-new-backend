
import { IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateColumnInput  {

  @IsString()
  @Column()
  state: string

  @IsString()
  @Column()
  form: string

  @IsString()
  @Column()
  columns: string
}
