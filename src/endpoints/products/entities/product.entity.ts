import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { ProductImage } from './';
import { Users } from '../../auth/entities/user.entity';
import { GlobalEntity } from '../../../common/entity/entity';
import { Brands } from '../../../endpoints/brand/entities/brand.entity';
import { Category } from '../../../endpoints/category/entities/category.entity';
import { Warehouses } from '../../../endpoints/warehouse/entities/warehouse.entity';
import { ProductTypeEntity } from '../../../endpoints/product-type/entities/product-type.entity';

@Entity({ name: 'products' })
export class Products extends GlobalEntity{

    @ApiProperty({
        example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
        description: 'Product ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'T-Shirt Teslo',
        description: 'Product Title',
        uniqueItems: true
    })
    @Column('text', {
        unique: true,
    })
    title: string;

    @ApiProperty({
        example: 0,
        description: 'Product price',
    })
    @Column('float',{
        default: 0
    })
    price: number;

    @ApiProperty({
        example: 'Anim reprehenderit nulla in anim mollit minim irure commodo.',
        description: 'Product description',
        default: null,
    })
    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @ApiProperty({
        example: 't_shirt_teslo',
        description: 'Product SLUG - for SEO',
        uniqueItems: true
    })
    @Column('text', {
        unique: true
    })
    slug: string;

    @ApiProperty({
        example: 10,
        description: 'Product stock',
        default: 0
    })
    @Column('int', {
        default: 0
    })
    stock: number;

    @ApiProperty({
        example: ['M','XL','XXL'],
        description: 'Product sizes',
    })
    @Column('text',{
        array: true
    })
    sizes: string[];

    @ApiProperty({
        example: 'women',
        description: 'Product gender',
    })
    @Column('text')
    gender: string;

    @ApiProperty()
    @Column('text', {
        array: true,
        default: []
    })
    tags: string[];

    // images
    @ApiProperty()
    @OneToMany( () => ProductImage, (productImage) => productImage.product, { cascade: true, eager: true })
    images?: ProductImage[];

    @ManyToOne(() => Users, ( user ) => user.product,{ eager: true } )
    user: Users

    @ManyToOne(()=> Brands, brand => brand.products,{ eager: true })
    brand: Brands;

    @ManyToOne(()=> Category, category => category.products,{ eager: true })
    category: Brands;

    @ManyToOne(()=> Warehouses, warehouse => warehouse.products,{ eager: true })
    warehouse: Warehouses;

    @ManyToOne(()=> ProductTypeEntity, prodctType => prodctType.products,{ eager: true })
    productType: ProductTypeEntity;

    @BeforeInsert()
    checkSlugInsert() {

        if ( !this.slug ) {
            this.slug = this.title;
        }

        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')

    }
    @BeforeUpdate()
    checkSlugUpdate() {
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
    }


}
