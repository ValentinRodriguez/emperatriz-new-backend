import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryEntity } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CategoryController],
  imports: [
    TypeOrmModule.forFeature([CategoryEntity])
  ],
  providers: [CategoryController, CategoryService]
})
export class CategoryModule {}
