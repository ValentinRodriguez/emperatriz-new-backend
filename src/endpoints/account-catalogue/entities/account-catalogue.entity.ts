import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateAccountCatalogueDTO } from '../dto/create-account-catalogue.input';

@Entity({ name: 'account_catalogue' })
export class AccountCatalogue extends CreateAccountCatalogueDTO{
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Columb ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn()
  id: string;
}
