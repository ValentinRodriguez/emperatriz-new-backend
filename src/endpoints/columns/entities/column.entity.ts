
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

@Entity({ name: 'columns' })
export class Columns extends GlobalEntity{
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Columb ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
