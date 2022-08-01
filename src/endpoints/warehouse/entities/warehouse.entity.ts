import { OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CreateWarehouseDTO } from '../dto/create-warehouse.input';
import { IsString } from 'class-validator';
import { ProductEntity } from 'src/endpoints/products/entities/product.entity';

@Entity()
export class WarehouseEntity extends CreateWarehouseDTO {
  @Column()
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => ProductEntity, product => product.warehouse)
  products: ProductEntity[];
}
