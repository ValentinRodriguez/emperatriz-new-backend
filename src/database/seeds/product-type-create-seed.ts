
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ProductTypeEntity } from '../../endpoints/product-type/entities/product-type.entity';
import { ProductTypeData } from '../../data/product-type-data';

const inputProdutTypeData = ProductTypeData

export class InputProductTypeCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE product_type_entity CASCADE');
        
        for (const ProductTypes of inputProdutTypeData) {
            await factory(ProductTypeEntity)().create(ProductTypes);
        }     
    }
}