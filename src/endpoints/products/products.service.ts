import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

import { validate as isUUID } from 'uuid';
import { Product } from './entities';
import { Users } from '../auth/entities/user.entity';
import { ResponseAPI } from 'src/common/response/response';
import { Crud } from 'src/common/crud';

@Injectable()
export class ProductsService extends Crud{

  private readonly logger = new Logger('ProductsService');

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    private readonly dataSource: DataSource
  ) {
    super(productRepository);
  }

  // async findOne( term: string ) {

  //   let product: Product;

  //   if ( isUUID(term) ) {
  //     product = await this.productRepository.findOneBy({ id: term });
  //   } else {
  //     const queryBuilder = this.productRepository.createQueryBuilder('prod'); 
  //     product = await queryBuilder
  //       .where('UPPER(title) =:title or slug =:slug', {
  //         title: term.toUpperCase(),
  //         slug: term.toLowerCase(),
  //       })
  //       .leftJoinAndSelect('prod.images','prodImages')
  //       .getOne();
  //   }

  //   if ( !product ) throw new NotFoundException(`Product with ${ term } not found`);

  //   return product;
  // }

  // async update( id: string, updateProductDto: UpdateProductDto, user: Users ) {

  //   const { imagesId, ...toUpdate } = updateProductDto;
  //   const product = await this.productRepository.preload({ id, ...toUpdate });

  //   if ( !product ) throw new NotFoundException(`Product with id: ${ id } not found`);

  //   // Create query runner
  //   const queryRunner = this.dataSource.createQueryRunner();
  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();

  //   try {
  //     if( imagesId ) {
  //       await queryRunner.manager.delete( ProductImage, { product: { id } });

  //       product.images = imagesId.map( 
  //         image => this.productImageRepository.create({ url: image }) 
  //       )
  //     }
      
  //     await this.productRepository.save( product );
  //     product.user = user;
      
  //     await queryRunner.manager.save( product );
  //     await queryRunner.commitTransaction();
  //     await queryRunner.release();

  //     return  new ResponseAPI(200, 'Success', this.findOnePlain( id ));
      
  //   } catch (error) {
  //     await queryRunner.rollbackTransaction();
  //     await queryRunner.release();
  //     this.handleDBExceptions(error);
  //   }
  // }


  // async deleteAllProducts() {
  //   const query = this.productRepository.createQueryBuilder('product');

  //   try {
  //     return await query
  //       .delete()
  //       .where({})
  //       .execute();
  //   } catch (error) {
  //     this.handleDBExceptions(error);
  //   }
  // }

}

