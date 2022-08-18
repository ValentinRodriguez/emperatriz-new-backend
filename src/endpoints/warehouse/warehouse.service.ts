import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouses } from './entities/warehouse.entity';
import { Crud } from 'src/common/crud';

@Injectable()
export class WarehouseService extends Crud{

  constructor(@InjectRepository(Warehouses) private wareHouseRepository: Repository<Warehouses>) {
    super(wareHouseRepository, ['products']);
  }

}
