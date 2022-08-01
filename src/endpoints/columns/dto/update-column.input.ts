import { IsString } from 'class-validator';
import { Column } from 'typeorm';

export class UpdateColumnInput  {

  @Column()
  @IsString()
  id: string;

  @Column()
  @IsString()
  state: string

  @Column()
  @IsString()
  form: string

  @IsString()
  @Column()
  columns: string
}
