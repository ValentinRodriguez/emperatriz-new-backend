import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseAPI } from 'src/common/response/response';
import { Repository } from 'typeorm';
import { CreateFormDTO } from './dto/create-form.input';
import { Forms } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(@InjectRepository(Forms) private formRepository: Repository<Forms>) { }

  async create(createFormDTO: CreateFormDTO) {
    const data = this.formRepository.create(createFormDTO); 
    return this.formRepository.save(data);
  }  
  
  async findByForm(form: string): Promise<Forms[]>  {       
    return this.formRepository.findBy({form});  
  }

  async findAll(): Promise<ResponseAPI> {
    try {
      const data = new ResponseAPI(200, 'Success', await this.formRepository.find());
      return data;        
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
