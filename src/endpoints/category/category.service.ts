import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Crud } from 'src/common/crud';

@Injectable()
export class CategoryService extends Crud{

  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {
    super(categoryRepository, ['products']);
  }


}
