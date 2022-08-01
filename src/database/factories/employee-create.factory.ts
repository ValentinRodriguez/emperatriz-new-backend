
import { Employees } from '../../endpoints/employee/entities/employee.entity';
import { define } from 'typeorm-seeding';

define(Employees, () => {
  const employee = new Employees();
  return employee;
});