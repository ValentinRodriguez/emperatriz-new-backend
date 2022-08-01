import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BranchOfficeEntity } from '../../../endpoints/branch-office/entities/branch-office.entity';
import { CreateEnterpriseDTO } from '../dto/create-enterprise.input';

@Entity('enterprise')
export class EnterpriseEntity extends CreateEnterpriseDTO{
  @Column()
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => BranchOfficeEntity, branch => branch.enterprise, { cascade: true, eager: true })
  branchs: BranchOfficeEntity[];
}
