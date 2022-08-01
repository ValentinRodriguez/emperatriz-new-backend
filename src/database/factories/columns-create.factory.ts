import { Columns } from '../../endpoints/columns/entities/column.entity';
import { define } from 'typeorm-seeding';

define(Columns, () => {
  const columns = new Columns();
  return columns;
});