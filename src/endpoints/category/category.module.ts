import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CategoryController],
  imports: [
    TypeOrmModule.forFeature([Category])
  ],
  providers: [CategoryController, CategoryService]
})
export class CategoryModule {}
