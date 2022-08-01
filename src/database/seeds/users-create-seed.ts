
import { Factory, Seeder } from 'typeorm-seeding';
import { usersData } from '../../data/users-data';
import { Users } from '../../endpoints/auth/entities/user.entity';
import { getManager } from 'typeorm';

const inputUsersData = usersData

export class InputUsersCreateSeeder implements Seeder {

    constructor() { }

    public async run(factory: Factory): Promise<void> { 
        await getManager().query('TRUNCATE users CASCADE');

        for (const user of inputUsersData) {
            await factory(Users)().create(user);
        }  
    }
}