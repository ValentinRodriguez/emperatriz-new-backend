import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from '../../../endpoints/products/entities/product.entity';
import { CreateBrandInput } from '../dto/create-brand.input';


@Entity( { name: 'brands' } )
export class Brands extends CreateBrandInput{

  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Products, product => product.brand)
  product: Products[];
  
}
