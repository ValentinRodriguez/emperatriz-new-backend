import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsResolver } from './columns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Columns } from './entities/column.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Columns])
  ],	
  providers: [ColumnsResolver, ColumnsService]
})
export class ColumnsModule {}
