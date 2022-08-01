
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { branchOfficeData } from '../../data/branch-office-data';
import { BranchOffice } from '../../endpoints/branch-office/entities/branch-office.entity';

const inputBranchData = branchOfficeData

export class InpuBranchCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE branch_office');
        
        for (const inputBranch of inputBranchData) {
            await factory(BranchOffice)().create(inputBranch);
        }     
    }
}