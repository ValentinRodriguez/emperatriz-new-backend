
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { RolesData } from '../../data/roles-data';
import { RoleEntity } from '../../endpoints/roles/entities/role.entity';

const inputRolesData = RolesData

export class InputRolesCreateSeeder implements Seeder {

    constructor() { }

    public async run(factory: Factory): Promise<void> { 
        await getManager().query('TRUNCATE role CASCADE');

        for (const role of inputRolesData) {
            await factory(RoleEntity)().create(role);
        }  
    }
}