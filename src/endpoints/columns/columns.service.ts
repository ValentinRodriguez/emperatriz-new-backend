import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColumnInput } from './dto/create-column.input';
import { ColumnEntity } from './entities/column.entity';

@Injectable()
export class ColumnsService {
  constructor(@InjectRepository(ColumnEntity) private columnRepository: Repository<ColumnEntity>) { }

  create(createColumnInput: CreateColumnInput) {
    let column = this.columnRepository.create(createColumnInput);
    return this.columnRepository.save(column);
  }

  findOne(form: string): Promise<ColumnEntity[]> {
    return this.columnRepository.findBy({ form });
  }

  findAll(): Promise<ColumnEntity[]> {
    return this.columnRepository.find();
  }
}
