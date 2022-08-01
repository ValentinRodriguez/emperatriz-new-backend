import { ColumnEntity } from '../../endpoints/columns/entities/column.entity';
import { define } from 'typeorm-seeding';

define(ColumnEntity, () => {
  const columns = new ColumnEntity();
  return columns;
});