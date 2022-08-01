
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateAccountCatalogueDTO } from './dto/create-account-catalogue.input';
import { UpdateAccountCatalogueDTO } from './dto/update-account-catalogue.input';
import { AccountCatalogue } from './entities/account-catalogue.entity';

@Injectable()
export class AccountCatalogueService {

  constructor(@InjectRepository(AccountCatalogue) private catalogueRepository: Repository<AccountCatalogue>) { }

  create(createAccountCatalogueInput: CreateAccountCatalogueDTO) {
    const data = this.catalogueRepository.create(createAccountCatalogueInput);
    return this.catalogueRepository.save(data);
  }

  findAll() {
    return this.catalogueRepository.find({
      where: { status: Status.Active }
    });
  }

  findAllAssistanceAccountCatalogue() {
    return this.catalogueRepository.find({
      where: {
        status: Status.Active,
        account_catalogue_level: 3
      }
    });
  }

  findOne(id: string) {
    // return this.catalogueRepository.findOne(id, {
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneAccountCatalogueByName(account_catalogue_description: string) {
    return this.catalogueRepository.find({
      where: {
        status: Status.Active,
        account_catalogue_description: account_catalogue_description
      }
    });
  }

  update(id: string, updateAccountCatalogueInput: UpdateAccountCatalogueDTO) {
    let data:AccountCatalogue = this.catalogueRepository.create(updateAccountCatalogueInput)
    data.id = id;
    return this.catalogueRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:AccountCatalogueEntity = this.catalogueRepository.create(register)
      //   return  await this.catalogueRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
