import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../auth/entities/user.entity';
import { Brands } from '../../../endpoints/brand/entities/brand.entity';
import { Category } from '../../../endpoints/category/entities/category.entity';
import { Warehouses } from '../../../endpoints/warehouse/entities/warehouse.entity';
import { ProductTypeEntity } from '../../../endpoints/product-type/entities/product-type.entity';
import { CreateProductDto } from '../dto/create-product.dto';

@Entity({ name: 'products' })
export class Products extends CreateProductDto{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Users, ( user ) => user.products,{ eager: true } )
    user: Users

    @ManyToOne(()=> Brands, brand => brand.products,{ eager: true })
    brand: Brands;

    @ManyToOne(()=> Category, category => category.products,{ eager: true })
    category: Brands;

    @ManyToOne(()=> Warehouses, warehouse => warehouse.products,{ eager: true })
    warehouse: Warehouses;

    @ManyToOne(()=> ProductTypeEntity, prodctType => prodctType.products,{ eager: true })
    productType: ProductTypeEntity;
}
