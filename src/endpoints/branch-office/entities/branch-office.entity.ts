import { Enterprises } from '../../../endpoints/enterprise/entities/enterprise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateBranchOfficeDTO } from '../dto/create-branch-office.input';

@Entity({ name: 'branch_office' })
export class BranchOffice extends CreateBranchOfficeDTO{
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @ManyToOne(()=> Enterprises, enterprise => enterprise.branchs)
  enterprise: Enterprises;
}
