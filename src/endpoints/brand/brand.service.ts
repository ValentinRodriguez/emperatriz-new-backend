import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { BrandEntity } from './entities/brand.entity';

@Injectable()
export class BrandService {

  constructor(@InjectRepository(BrandEntity) private brandRepository: Repository<BrandEntity>) { }

  create(createBrandInput: CreateBrandInput) {
    const data = this.brandRepository.create(createBrandInput);
    return this.brandRepository.save(data);
  }

  findAll() {
    return this.brandRepository.find({
      relations: ['products'],
      where: { status: Status.Active }
    });
  }

  findOne(id: string) {
    // return this.brandRepository.findOne(id, {
    //   relations: ['products'],
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneBrandByName(title_brand: string) {
    return this.brandRepository.find({
      where: {
        status: Status.Active,
        title_brand: title_brand
      }
    });
  }

  update(id: string, updateBrandInput: UpdateBrandInput) {
    let data:BrandEntity = this.brandRepository.create(updateBrandInput)
    data.id = id;
    return this.brandRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:BrandEntity = this.brandRepository.create(register)
      //   return  await this.brandRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
