

import { Column } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MinLength } from 'class-validator';

export class CreateAccountCatalogueDTO extends GlobalEntity {
  
  @ApiProperty()
  @Column()
  @IsString()  
  @MinLength(3)
  account_catalogue_description:string;
  
  @ApiProperty()
  @Column()
  @IsString()  
  @IsInt()
  account_catalogue_level:number;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_origin:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_group:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_account:string;
  
  @ApiProperty()
  @Column({nullable: true, default: '1'})
  @IsString()
  account_catalogue_account_applicable:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_retention_code:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_account_type:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_analityc:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_catalogue:string;
  
  @ApiProperty()
  @Column()
  @IsString()
  account_catalogue_departament:string;
}
