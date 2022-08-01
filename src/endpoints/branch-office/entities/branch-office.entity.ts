import { EnterpriseEntity } from 'src/endpoints/enterprise/entities/enterprise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateBranchOfficeDTO } from '../dto/create-branch-office.input';

@Entity('branch_office')
export class BranchOfficeEntity extends CreateBranchOfficeDTO{
  @Column()
  @PrimaryGeneratedColumn()
  id: string;
  
  @ManyToOne(()=> EnterpriseEntity, enterprise => enterprise.branchs)
  enterprise: EnterpriseEntity;
}
