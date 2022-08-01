import { Column } from 'typeorm';
import { CreateAccountCatalogueDTO } from './create-account-catalogue.input';

export class UpdateAccountCatalogueDTO extends CreateAccountCatalogueDTO {
  @Column(() => String)
  id: string;
}
