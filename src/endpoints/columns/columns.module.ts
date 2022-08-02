import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Columns } from './entities/column.entity';

@Module({
controllers: [ColumnsController],
  imports: [
    TypeOrmModule.forFeature([Columns])
  ],	
  providers: [ColumnsService]
})
export class ColumnsModule {}
