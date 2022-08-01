import { Employees } from '../../endpoints/employee/entities/employee.entity';
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';


export class EmployeeCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE employees');
        
        await factory(Employees)().create({
            firstName: 'Amitav',
            lastName: 'Roy'
        });       
    }
}