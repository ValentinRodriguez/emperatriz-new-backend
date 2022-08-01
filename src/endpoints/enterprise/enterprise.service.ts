import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnterpriseDTO } from './dto/create-enterprise.input';
import { UpdateEnterpriseInput } from './dto/update-enterprise.input';
import { Enterprises } from './entities/enterprise.entity';

@Injectable()
export class EnterpriseService {

  constructor(@InjectRepository(Enterprises) private enterpriseRepository: Repository<Enterprises>) { }

  create(enterpriseRepository: CreateEnterpriseDTO) {
    const data = this.enterpriseRepository.create(enterpriseRepository);
    return this.enterpriseRepository.save(data);
  }

  findAll() {   
    return this.enterpriseRepository.find({
      relations: ['branchs']
    });
  }

  findOne(id: string) {   
    // return this.enterpriseRepository.findOne(id,{
    //   relations: ['branchs']
    // });
  }

  update(id: string, updateEnterpriseInput: UpdateEnterpriseInput) {
    return `This action updates a #${id} enterprise`;
  }

  remove(id: string) {

  }
}
