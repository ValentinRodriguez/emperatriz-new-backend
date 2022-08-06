import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brands } from './entities/brand.entity';
import { Crud } from 'src/common/crud';
import { Status } from 'src/common/entity/entity';

@Injectable()
export class BrandService extends Crud{

  constructor(@InjectRepository(Brands) private brandRepository: Repository<Brands>) {
    super(brandRepository, ['product']);
  }




}
