import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from 'src/common/crud';
import { Repository } from 'typeorm';
import { CreateCurrencyDTO } from './dto/create-currency.input';
import { UpdateCurrencyInput } from './dto/update-currency.input';
import { Currencies } from './entities/currency.entity';

@Injectable()
export class CurrencyService extends Crud{

  constructor(@InjectRepository(Currencies) private currencyRepository: Repository<Currencies>) {
    super(currencyRepository);
  }

  create(createCurrencyDTO: CreateCurrencyDTO) {
    const data = this.currencyRepository.create(createCurrencyDTO);
    return this.currencyRepository.save(data);
  }

  findOne(id: string) {
    // return this.currencyRepository.findOne(id,{
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  update(id: string, updateCurrencyInput: UpdateCurrencyInput) {
    let data:Currencies = this.currencyRepository.create(updateCurrencyInput)
    data.id = id;
    return this.currencyRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);
      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:CurrencyEntity = this.currencyRepository.create(register)
      //   return  await this.currencyRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
