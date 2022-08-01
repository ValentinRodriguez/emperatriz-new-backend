import { ProductEntity } from '../../../endpoints/products/entities/product.entity';
import { PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { CreateProductTypeDTO } from '../dto/create-product-type.input';

@Entity()
export class ProductTypeEntity extends CreateProductTypeDTO {
  @PrimaryGeneratedColumn()
  id: string

  @OneToMany(() => ProductEntity, product => product.productType)  
  products: ProductEntity[];
}
