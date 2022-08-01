import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreatePaymentConditionDTO } from './dto/create-payment-condition.input';
import { UpdatePaymentConditionInput } from './dto/update-payment-condition.input';
import { PaymentConditions } from './entities/payment-condition.entity';

@Injectable()
export class PaymentConditionService {

  constructor(@InjectRepository(PaymentConditions) private PaymentConditionRepository: Repository<PaymentConditions>) { }

  create(createPaymentConditionInput: CreatePaymentConditionDTO) {

    const movement = this.PaymentConditionRepository.create(createPaymentConditionInput);
    return this.PaymentConditionRepository.save(movement);
  }

  findAll() {

    return this.PaymentConditionRepository.find({
      where: {
        status: Status.Active
      }
    })
  }

  findOne(id:string) {
    // return this.PaymentConditionRepository.findOne(id, {
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOnePaymentConditionByName(payment_condition_description: string) {
    return this.PaymentConditionRepository.find({
      where: {
        status: Status.Active,
        payment_condition_description: payment_condition_description
      }
    });
  }

   update(id: string, updatePaymentConditionInput: UpdatePaymentConditionInput) {
    let data:PaymentConditions = this.PaymentConditionRepository.create(updatePaymentConditionInput)
    data.id = id;
    return this.PaymentConditionRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:PaymentConditionEntity = this.PaymentConditionRepository.create(register)
      //   return  await this.PaymentConditionRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
