import { Products } from '../../products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCategoryDTO } from '../dto/create-category.input';
import { IsString } from 'class-validator';

@Entity( {name:'category'} )
export class Category extends CreateCategoryDTO{

  @Column()
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
  
  @OneToMany(() => Products, product => product.category)  
  products: Products[];
}
