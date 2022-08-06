import { OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CreateWarehouseDTO } from '../dto/create-warehouse.input';
import { IsString } from 'class-validator';
import { Products } from '../../../endpoints/products/entities/product.entity';

@Entity({ name: 'warehouses' })
export class Warehouses extends CreateWarehouseDTO {
  @Column()
  @IsString()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Products, product => product.warehouse)
  products: Products[];
}
