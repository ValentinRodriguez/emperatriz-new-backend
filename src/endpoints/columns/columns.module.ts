import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsResolver } from './columns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from './entities/column.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ColumnEntity])
  ],	
  providers: [ColumnsResolver, ColumnsService]
})
export class ColumnsModule {}
