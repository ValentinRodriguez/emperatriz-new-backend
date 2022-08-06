import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsOptional, IsUUID } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';
import { IsGlobalString,IsGlobalNumber } from '../../../endpoints/auth/decorators';


export class CreateProductDto extends GlobalEntity{

    @ApiProperty({
        description: 'Product code (unique)',
        nullable: false,
        minLength: 1
    })  
    @IsOptional()
    @Column({ nullable:true, unique:true })
    code?:string

    @IsGlobalString({ minLength:1 })
    @Column()
    name: string;
    
    @IsGlobalNumber({ min:1 })
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0})
    price:number;

    @IsGlobalNumber({ min:1, isInteger:true })
    @IsOptional()
    @Column({nullable: true})
    discount?:number

    @IsGlobalNumber({ min:1 })
    @IsOptional()
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0, nullable: true})
    discount_price?:number

    @IsGlobalString({ minLength: 10 })
    @Column()    
    description:string

    @IsGlobalNumber()
    @IsOptional()
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0, nullable: true})
    width?:number
  
    @IsGlobalNumber()
    @IsOptional()
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0, nullable: true})
    height?:number
  
    @IsGlobalNumber()
    @IsOptional()
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0, nullable: true})
    weight?:number

    @IsGlobalString({ minLength: 5 })
    @IsOptional()
    @Column({nullable: true})
    purchase_note?:string

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    @Column('text', { array: true })
    tags?: string[];
    
    @IsGlobalNumber()
    @IsOptional()
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0, nullable: true})
    average_rating?:number
  
    @IsGlobalNumber()
    @IsOptional()
    @Column({nullable: true, default: 0})
    stock_quantity?:number;

    @IsGlobalString()
    @IsOptional()
    @Column('text', { unique: true, nullable: true, default: null })
    slug?: string;
 
    @IsString({ each: true })
    @IsArray()
    @IsUUID()
    @Column('text', { array: true })
    imagesId: string[];

    @IsGlobalString()
    @Column()
    @IsUUID()
    userId: string;

    @IsGlobalString()
    @IsUUID()
    @Column()
    brandId: string;

    @IsGlobalString()
    @IsUUID()
    @Column()
    categoryId: string;

    @IsGlobalString()
    @IsUUID()
    @Column()
    warehouseId: string;

    @IsGlobalString()
    @IsUUID()
    @Column()
    productTypeId: string;

    @BeforeInsert()
    transformFieldBeforeInsert() {
        // SLUG FIELD
        if ( !this.slug ) this.slug = this.name;        
        this.slug = this.slug.toLowerCase().replaceAll(' ','_').replaceAll("'",'');
    }

    @BeforeUpdate()
    transformFieldBeforeUpdate() {
        // SLUG FIELD
        this.slug = this.slug.toLowerCase().replaceAll(' ','_').replaceAll("'",'')
    }
}
