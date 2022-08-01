import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../../endpoints/products/entities/product.entity';
import { CreateBrandInput } from '../dto/create-brand.input';


@Entity( { name: 'brands' } )
export class BrandEntity extends CreateBrandInput{

  @Column()
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => ProductEntity, product => product.brand)
  products: ProductEntity[];
  
}
