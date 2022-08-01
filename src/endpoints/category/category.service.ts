import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateCategoryDTO } from './dto/create-category.input';
import { UpdateCategoryDTO } from './dto/update-category.input';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(@InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>) { }

  create(createCategoryInput: CreateCategoryDTO) {
    console.log(createCategoryInput);    
    const data = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(data);
  }

  findAll() {
    return this.categoryRepository.find({
      relations: ['products'],
        where: { status: Status.Active }
    });
  }

  findOne(id: string) {
    // return this.categoryRepository.findOne(id,{
    //   relations: ['products'],
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneCategoryByName(title_category: string) {
    return this.categoryRepository.find({
      where: {
        status: Status.Active,
        title_category: title_category
      }
    });
  }

  update(id: string, updateCategoryInput: UpdateCategoryDTO) {
    let data:CategoryEntity = this.categoryRepository.create(updateCategoryInput)
    data.id = id;
    console.log(data);    
    return this.categoryRepository.save(data);   
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);
      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:CategoryEntity = this.categoryRepository.create(register)
      //   return  await this.categoryRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
