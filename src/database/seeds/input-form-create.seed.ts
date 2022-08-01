import { Forms } from '../../endpoints/form/entities/form.entity';
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { formData } from '../../data/form-data';

const inputFOrmData = formData

export class InputFormCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE forms');
        
        for (const inputForm of inputFOrmData) {
            await factory(Forms)().create(inputForm);
        }     
    }
}