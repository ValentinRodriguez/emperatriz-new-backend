
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { modulesData } from '../../data/modules-data';
import { ModuleEntity } from '../../endpoints/modules/entities/module.entity';

const inputModulesData = modulesData

export class InputModulesCreateSeeder implements Seeder {

    constructor() { }

    public async run(factory: Factory): Promise<void> { 
        // await getManager().query('TRUNCATE users CASCADE');

        for (const module of inputModulesData) {
            await factory(ModuleEntity)().create(module);
        }  
    }
}