import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YesNo } from '../../utils/global-table-enum';
import { Repository } from 'typeorm';
import { CreateProductTypeDTO } from './dto/create-product-type.input';
import { UpdateProductTypeDTO } from './dto/update-product-type.input';
import { ProductTypeEntity } from './entities/product-type.entity';
import { Status } from '../../common/entity/entity';
import { Crud } from 'src/common/crud';

@Injectable()
export class ProductTypeService extends Crud{

  constructor(@InjectRepository(ProductTypeEntity) private productTypeRepository: Repository<ProductTypeEntity>) {
    super( productTypeRepository, ['products'] );
  }

}
