import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateProviderDTO } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';
import { Providers } from './entities/provider.entity';

@Injectable()
export class ProviderService {

  constructor(@InjectRepository(Providers) private providerRepository: Repository<Providers>) { }

  create(providerRepository: CreateProviderDTO) {
    const data = this.providerRepository.create(providerRepository); 
    return this.providerRepository.save(data);
  }

  findAll() {
    return this.providerRepository.find();  
  }

  findOne(id: string) {
    // return this.providerRepository.findOne({id});
  }

  SearchOneProviderByName(provider_name: string) {
    return this.providerRepository.find({
      where: {
        status: Status.Active,
        provider_name: provider_name
      }
    });
  }

  update(id: string, updateProviderInput: UpdateProviderInput) {
    let data:Providers = this.providerRepository.create(updateProviderInput)
    data.id = id;
    console.log(data);    
    return this.providerRepository.save(data);  
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);
      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:ProviderEntity = this.providerRepository.create(register)
      //   return  await this.providerRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
