import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brands } from './entities/brand.entity';
import { Crud } from 'src/common/crud';

@Injectable()
export class BrandService extends Crud{

  constructor(@InjectRepository(Brands) private brandRepository: Repository<Brands>) {
    super(brandRepository, ['products']);
  }




}
