
import { ColumnEntity } from '../../endpoints/columns/entities/column.entity';
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { columnData } from '../../data/column-data';

const inputColumnData = columnData

export class InputColumnCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE columns');
        
        for (const inputColumns of inputColumnData) {
            await factory(ColumnEntity)().create(inputColumns);
        }     
    }
}