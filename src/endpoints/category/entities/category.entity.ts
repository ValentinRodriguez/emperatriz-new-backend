import { ProductEntity } from '../../products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCategoryDTO } from '../dto/create-category.input';
import { IsString } from 'class-validator';

@Entity()
export class CategoryEntity extends CreateCategoryDTO{

  @Column()
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
  
  @OneToMany(() => ProductEntity, product => product.category)  
  products: ProductEntity[];
}
