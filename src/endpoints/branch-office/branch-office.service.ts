import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../auth/entities/user.entity';
import { CreateBranchOfficeDTO } from './dto/create-branch-office.input';
import { UpdateBranchOfficeInput } from './dto/update-branch-office.input';
import { BranchOfficeEntity } from './entities/branch-office.entity';

@Injectable()
export class BranchOfficeService {

  constructor(@InjectRepository(BranchOfficeEntity) private branchOfficeRepository: Repository<BranchOfficeEntity>) { }

  create(branchOfficeRepository: CreateBranchOfficeDTO) {
    const data = this.branchOfficeRepository.create(branchOfficeRepository);
    return this.branchOfficeRepository.save(data);
  }

  findAll() {
    return this.branchOfficeRepository.find({
      relations: ['enterprise']
    });
  }

  findOne(id: string) { 
    // return this.branchOfficeRepository.findOne(id,{
    //   relations: ['enterprise']
    // });
  }

  update(id: string, updateBranchOfficeInput: UpdateBranchOfficeInput, user: UserEntity) {
    return `This action updates a #${id} branchOffice`;
  }

  remove(id: string) {
    return `This action removes a #${id} branchOffice`;
  }
}
