import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brands } from './entities/brand.entity';

@Module({
  controllers: [BrandController],
  imports: [
    TypeOrmModule.forFeature([Brands])
  ],
  providers: [BrandService],
  exports: [
    BrandService,
    TypeOrmModule
  ]
})
export class BrandModule {}
