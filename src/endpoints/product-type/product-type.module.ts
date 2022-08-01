import { Module } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeEntity } from './entities/product-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
  controllers: [ProductTypeController],
  imports: [
    TypeOrmModule.forFeature([ProductTypeEntity])
  ],
  providers: [ProductTypeService]
})
export class ProductTypeModule {}
