import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateWarehouseDTO } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { Warehouses } from './entities/warehouse.entity';

@Injectable()
export class WarehouseService {

  constructor(@InjectRepository(Warehouses) private wareHouseRepository: Repository<Warehouses>) { }

  create(createWarehouseDTO: CreateWarehouseDTO) {
    const data = this.wareHouseRepository.create(createWarehouseDTO); 
    return this.wareHouseRepository.save(data);
  }

  findAll() {
    return this.wareHouseRepository.find({
      relations: ['products'],
      where: { status: Status.Active }
    }); 
  }
  
  findOne(id: string) {
    // return this.wareHouseRepository.findOne(id,{ 
    //   relations: ['products'],
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneWareHouseByName(title_warehouse: string) {
    return this.wareHouseRepository.find({
      where: {
        status: Status.Active,
        title_warehouse: title_warehouse
      }
    });
  }

  update(id: string, updateWarehouseInput: UpdateWarehouseInput) {
    let data:Warehouses = this.wareHouseRepository.create(updateWarehouseInput)
    data.id = id;
    return this.wareHouseRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:WarehouseEntity = this.wareHouseRepository.create(register)
      //   return  await this.wareHouseRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
