import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDTO } from './dto/create-form.input';
import { FormEntity } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(@InjectRepository(FormEntity) private formRepository: Repository<FormEntity>) { }

  async create(createFormDTO: CreateFormDTO) {
    const data = this.formRepository.create(createFormDTO); 
    return this.formRepository.save(data);
  }  
  
  async findByForm(form: string): Promise<FormEntity[]>  {       
    return this.formRepository.findBy({form});  
  }

  async findAll(): Promise<FormEntity[]> {
    return this.formRepository.find();  
  }
}
