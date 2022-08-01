
import { BranchOffice } from '../../endpoints/branch-office/entities/branch-office.entity';
import { define } from 'typeorm-seeding';

define(BranchOffice, () => {
  const columns = new BranchOffice();
  return columns;
});