import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BranchOffice } from '../../../endpoints/branch-office/entities/branch-office.entity';
import { CreateEnterpriseDTO } from '../dto/create-enterprise.input';

@Entity({ name: 'enterprises' })
export class Enterprises extends CreateEnterpriseDTO{
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => BranchOffice, branch => branch.enterprise, { cascade: true, eager: true })
  branchs: BranchOffice[];
}
