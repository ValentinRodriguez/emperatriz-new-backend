import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { ProductImage } from './';
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

    // images
    @ApiProperty()
    @OneToMany( () => ProductImage, (productImage) => productImage.product, { cascade: true, eager: true })
    images: ProductImage[];

    @ManyToOne(() => Users, ( user ) => user.product,{ eager: true } )
    user: Users

    @ManyToOne(()=> Brands, brand => brand.product,{ eager: true })
    brand: Brands;

    @ManyToOne(()=> Category, category => category.products,{ eager: true })
    category: Brands;

    @ManyToOne(()=> Warehouses, warehouse => warehouse.products,{ eager: true })
    warehouse: Warehouses;

    @ManyToOne(()=> ProductTypeEntity, prodctType => prodctType.products,{ eager: true })
    productType: ProductTypeEntity;
}
