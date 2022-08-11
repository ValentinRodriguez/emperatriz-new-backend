import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../common/entity/entity';
import { Repository } from 'typeorm';
import { CreateWarehouseDTO } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { Warehouses } from './entities/warehouse.entity';
import { Crud } from 'src/common/crud';

@Injectable()
export class WarehouseService extends Crud{

  constructor(@InjectRepository(Warehouses) private wareHouseRepository: Repository<Warehouses>) {
    super(wareHouseRepository, ['products']);
  }

}
