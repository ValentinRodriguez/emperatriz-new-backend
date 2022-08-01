import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateClientDTO } from './dto/create-client.input';
import { UpdateClientDTO } from './dto/update-client.input';
import { Clients } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(@InjectRepository(Clients) private clientRepository: Repository<Clients>) { }

  create(createClientInput: CreateClientDTO) {
    console.log(createClientInput);    
    const data = this.clientRepository.create(createClientInput);
    return this.clientRepository.save(data);
  }

  findAll() {
    return this.clientRepository.find({
        where: { status: Status.Active }
    });
  }

  findOne(id: string) {
    // return this.clientRepository.findOne(id,{
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneClientByName(client_name: string) {
    return this.clientRepository.find({
      where: {
        status: Status.Active,
        client_name: client_name
      }
    });
  }

  update(id: string, updateClientDTO: UpdateClientDTO) {
    let data:Clients = this.clientRepository.create(updateClientDTO)
    data.id = id;   
    return this.clientRepository.save(data);   
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);
      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:ClientEntity = this.clientRepository.create(register)
      //   return  await this.clientRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
