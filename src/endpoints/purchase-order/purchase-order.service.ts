import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/common/entity/entity';
import { Repository } from 'typeorm';
import { CreatePurchaseOrderDTO } from './dto/create-purchase-order.input';
import { UpdatePurchaseOrderInput } from './dto/update-purchase-order.input';
import { PurchaseOrderEntity } from './entities/purchase-order.entity';

@Injectable()
export class PurchaseOrderService {

  constructor(@InjectRepository(PurchaseOrderEntity) private PurchaseOrderEntityRepository: Repository<PurchaseOrderEntity>) { }

  create(createPurchaseOrderInput: CreatePurchaseOrderDTO) {    
    const purchaseOrder = this.PurchaseOrderEntityRepository.create(createPurchaseOrderInput);
    return this.PurchaseOrderEntityRepository.save(purchaseOrder);
  }

  findAll() {
    return this.PurchaseOrderEntityRepository.find({
      where: {
        status: Status.Active
      }}
    );
  }

  findOne(id: string) {
    // return this.PurchaseOrderEntityRepository.findOne(id, {
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  update(id: string, updatePurchaseOrderInput: UpdatePurchaseOrderInput) {
    let data:PurchaseOrderEntity = this.PurchaseOrderEntityRepository.create(updatePurchaseOrderInput)
    data.id = id;
    return this.PurchaseOrderEntityRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:PurchaseOrderEntity = this.PurchaseOrderEntityRepository.create(register)
      //   return  await this.PurchaseOrderEntityRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }

  }
}
