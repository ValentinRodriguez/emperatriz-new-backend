import { Products } from '../../../endpoints/products/entities/product.entity';
import { PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { CreateProductTypeDTO } from '../dto/create-product-type.input';

@Entity()
export class ProductTypeEntity extends CreateProductTypeDTO {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToMany(() => Products, product => product.productType)  
  products: Products[];
}
