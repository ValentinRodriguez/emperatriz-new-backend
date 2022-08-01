import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from './../products/products.service';
import { initialData } from './data/seed-data';
import { Users } from '../auth/entities/user.entity';


@Injectable()
export class SeedService {

  constructor(
    private readonly productsService: ProductsService,

    @InjectRepository( Users )
    private readonly userRepository: Repository<Users>
  ) {}


  async runSeed() {

    await this.productsService.deleteAllProducts();
    const adminUser = await this.insertUsers();

    await this.insertNewProducts( adminUser );

    return 'SEED EXECUTED';
  }

  private async insertUsers() {

    const seedUsers = initialData.users;
    
    const users: Users[] = [];

    seedUsers.forEach( user => {
      users.push( this.userRepository.create( user ) )
    });

    const dbUsers = await this.userRepository.save( seedUsers )

    return dbUsers[0];
  }


  private async insertNewProducts( user: Users ) {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;
    const insertPromises = [];

    products.forEach( product => {
      insertPromises.push( this.productsService.create( product, user ) );
    });

    await Promise.all( insertPromises );

    return true;
  }


}
