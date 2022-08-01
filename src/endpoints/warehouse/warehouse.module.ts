import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { WarehouseEntity } from './entities/warehouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [WarehouseController],
  imports: [
    TypeOrmModule.forFeature([WarehouseEntity])
  ],
  providers: [WarehouseService]
})
export class WarehouseModule {}
