import { TypeElement } from '../../../utils/global-table-enum';
import { IsEnum } from 'class-validator';
import { Column } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateFormDTO extends GlobalEntity{

  @Column({unique: true})
  input_id: string;

  @Column()
  form: string;

  @Column({nullable: true})
  typeElement: string;

  @Column({nullable: true})
  mask: string;

  @Column()
  @Column({ type: 'enum', enum: TypeElement, default: TypeElement.input })
  @IsEnum(TypeElement)
  type: TypeElement;

  @Column()
  label: string;

  @Column()
  formControlName: string;

  @Column({ nullable: true })
  blur: string;

  @Column({ nullable: true })
  click: string;

  @Column({ nullable: true })
  action: string;

  @Column({ nullable: true })
  stateInput: string;

  @Column({nullable: true})
  name: string;

  @Column({nullable: true})
  stateToFilter: string;

  @Column({nullable: true})
  placeholder: string;

  @Column({nullable: true})
  tooltip: string;

  @Column({nullable: true})
  value: number;

  @Column({nullable: true})
  min_value: number;

  @Column({nullable: true})
  max_value: number;

  @Column({nullable: true})
  options: string;

  @Column({nullable: true})
  validations: string;

  @Column({nullable: true})
  disabled: boolean;

  @Column({nullable: true})
  optionLabel: string;
  
  @Column({nullable: true})
  optionValue: string;

  @Column()
  class: string;

  @Column({nullable: true})
  rows: number;

  @Column({nullable: true})
  cols: number;

  @Column({nullable: true})
   @Column({nullable: true})
  formArray: string;

  @Column({nullable: true})
  formArrayFooter: boolean;

  @Column({nullable: true})
  mode: string;

  @Column({nullable: true})
  multiple: string;

  @Column({nullable: true})
  accept: string;

  @Column({nullable: true})
  maxFileSize: number;

  @Column({nullable: true})
  invalidFileSizeMessageSummary: string;

  @Column({nullable: true})
  invalidFileSizeMessageDetail: string;

  @Column({nullable: true})
  invalidFileTypeMessageSummary: string;

  @Column({nullable: true})
  invalidFileTypeMessageDetail: string;

  @Column({nullable: true})
  invalidFileLimitMessageSummary: string;

  @Column({nullable: true})
  invalidFileLimitMessageDetail: string;

  @Column({nullable: true})
  showUploadButton: boolean;

  @Column({nullable: true})
  cancelLabel: string;

  @Column({nullable: true})
  suggestions: string;

  @Column({nullable: true})
   @Column({nullable: true})
  dateFormat: string;

  @Column({nullable: true})
  minDate: Date;
}
