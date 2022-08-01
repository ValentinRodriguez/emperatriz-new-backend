import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { Warehouses } from './entities/warehouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [WarehouseController],
  imports: [
    TypeOrmModule.forFeature([Warehouses])
  ],
  providers: [WarehouseService]
})
export class WarehouseModule {}
