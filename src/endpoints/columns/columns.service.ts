import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColumnInput } from './dto/create-column.input';
import { Columns } from './entities/column.entity';

@Injectable()
export class ColumnsService {
  constructor(@InjectRepository(Columns) private columnRepository: Repository<Columns>) { }

  create(createColumnInput: CreateColumnInput) {
    let column = this.columnRepository.create(createColumnInput);
    return this.columnRepository.save(column);
  }

  findOne(form: string): Promise<Columns[]> {
    return this.columnRepository.findBy({ form });
  }

  findAll(): Promise<Columns[]> {
    return this.columnRepository.find();
  }
}
