import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEnum, IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';
import { TypeElement } from '../../../utils/global-table-enum';

@Entity('forms')
export class FormEntity extends GlobalEntity{

  @PrimaryGeneratedColumn()
  @IsString()
  id: string

  @Column({unique: true})
  @IsString()
  input_id: string;

  @Column()
  @IsString()
  form: string;

  @Column({nullable: true})
  @IsString()
  typeElement: string;

  @Column({nullable: true})
  @IsString()
  mask: string;

  @Column()
  @Column({ type: 'enum', enum: TypeElement, default: TypeElement.input })
  @IsEnum(TypeElement)
  type: TypeElement;

  @Column()
  @IsString()
  label: string;

  @Column({ unique: true })
  @IsString()
  formControlName: string;

  @Column({ nullable: true })
  @IsString()
  blur: string;

  @Column({ nullable: true })
  @IsString()
  click: string;

  @Column({ nullable: true })
  @IsString()
  action: string;

  @Column({ nullable: true })
  @IsString()
  stateInput: string;

  @Column({nullable: true})
  @IsString()
  name: string;

  @Column({nullable: true})
  @IsString()
  stateToFilter: string;

  @Column({nullable: true})
  @IsString()
  placeholder: string;

  @Column({nullable: true})
  @IsString()
  tooltip: string;

  @Column({nullable: true})
  value: number;

  @Column({nullable: true})
  min_value: number;

  @Column({nullable: true})
  max_value: number;

  @Column({nullable: true})
  @IsString()
  options: string;

  @Column({nullable: true})
  @IsString()
  validations: string;

  @Column({nullable: true})
  disabled: boolean;

  @Column({nullable: true})
  @IsString()
  optionLabel: string;
  
  @Column({nullable: true})
  @IsString()
  optionValue: string;

  @Column()
  @IsString()
  class: string;

  @Column({nullable: true})
  rows: number;

  @Column({nullable: true})
  cols: number;

  @Column({nullable: true})
   @Column({nullable: true})
   @IsString()
  formArray: string;

  @Column({nullable: true})
  formArrayFooter: boolean;

  @Column({nullable: true})
  @IsString()
  mode: string;

  @Column({nullable: true})
  @IsString()
  multiple: string;

  @Column({nullable: true})
  @IsString()
  accept: string;

  @Column({nullable: true})
  maxFileSize: number;

  @Column({nullable: true})
  @IsString()
  invalidFileSizeMessageSummary: string;

  @Column({nullable: true})
  @IsString()
  invalidFileSizeMessageDetail: string;

  @Column({nullable: true})
  @IsString()
  invalidFileTypeMessageSummary: string;

  @Column({nullable: true})
  @IsString()
  invalidFileTypeMessageDetail: string;

  @Column({nullable: true})
  @IsString()
  invalidFileLimitMessageSummary: string;

  @Column({nullable: true})
  @IsString()
  invalidFileLimitMessageDetail: string;

  @Column({nullable: true})
  showUploadButton: boolean;

  @Column({nullable: true})
  @IsString()
  cancelLabel: string;

  @Column({nullable: true})
  @IsString()
  suggestions: string;

  @Column({nullable: true})
  @IsString()
  dateFormat: string;

  @Column({nullable: true})
  minDate: Date;
}