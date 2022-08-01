import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YesNo } from '../../utils/global-table-enum';
import { Repository } from 'typeorm';
import { CreateProductTypeDTO } from './dto/create-product-type.input';
import { UpdateProductTypeDTO } from './dto/update-product-type.input';
import { ProductTypeEntity } from './entities/product-type.entity';
import { Status } from '../../common/entity/entity';

@Injectable()
export class ProductTypeService {

  constructor(@InjectRepository(ProductTypeEntity) private productTypeRepository: Repository<ProductTypeEntity>) { }

  create(createProductTypeInput: CreateProductTypeDTO) {
    const data = this.productTypeRepository.create(createProductTypeInput);
    return this.productTypeRepository.save(data);
  }

  findAll() {
    return this.productTypeRepository.find({
      relations: ['products'],
      where: { status: Status.Active }
    });
  }

  findOne(id: string) {
    // return this.productTypeRepository.findOne(id,{
    //   relations: ['products'],
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneProductTypeByName(title_productType: string) {
    return this.productTypeRepository.find({
      where: {
        status: Status.Active,
        title_productType: title_productType
      }
    });
  }

  update(id: string, updateProductTypeDTO: UpdateProductTypeDTO) {
    let data:ProductTypeEntity = this.productTypeRepository.create(updateProductTypeDTO)
    data.id = id;
    return this.productTypeRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   if (register.removable === YesNo.NO) throw new NotAcceptableException(`Este registro no puede ser eliminado.`);
        
      //   register.status = Status.Deactive;
      //   let data:ProductTypeEntity = this.productTypeRepository.create(register)
      //   return  await this.productTypeRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`);
    }catch(error){   
      return error;  
    }
  }
}
