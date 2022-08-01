import { ProductTypeEntity } from '../../endpoints/product-type/entities/product-type.entity';
import { define } from 'typeorm-seeding';

define(ProductTypeEntity, () => {
  const productType = new ProductTypeEntity();
  return productType;
});