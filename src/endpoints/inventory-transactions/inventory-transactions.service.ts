import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/common/entity/entity';

import { Repository } from 'typeorm';

import { CreateInventoryTransactionDTO } from './dto/create-inventory-transaction.input';
import { UpdateInventoryTransactionDTO } from './dto/update-inventory-transaction.input';
import { InventoryTransactionEntity } from './entities/inventory-transaction.entity';

@Injectable()
export class InventoryTransactionsService {

  constructor(@InjectRepository(InventoryTransactionEntity) private inventoryTransactionRepository: Repository<InventoryTransactionEntity>) { }

  create(createInventoryTransactionInput: CreateInventoryTransactionDTO) {
    const data = this.inventoryTransactionRepository.create(createInventoryTransactionInput);
    return this.inventoryTransactionRepository.save(data);
  }

  findAll() {
    return this.inventoryTransactionRepository.find({
        where: { status: Status.Active }
    });
  }

  findOne(id:string) {
    // return this.inventoryTransactionRepository.findOne(id,{
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  update(id:string, updateInventoryTransactionInput: UpdateInventoryTransactionDTO) {
    let data:InventoryTransactionEntity = this.inventoryTransactionRepository.create(updateInventoryTransactionInput)
    data.id = id;
    console.log(data);    
    return this.inventoryTransactionRepository.save(data);    
  }

  async remove(id:string) {
    try{
      let register = await this.findOne(id);

      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:InventoryTransactionEntity = this.inventoryTransactionRepository.create(register)
      //   return  await this.inventoryTransactionRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
