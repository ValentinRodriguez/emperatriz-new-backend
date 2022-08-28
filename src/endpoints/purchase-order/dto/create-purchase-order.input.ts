import { IsEnum, IsIn, IsInt, IsString } from 'class-validator';
import { Column, Generated } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';
import { YesNo } from '../../../utils/global-table-enum';

export class CreatePurchaseOrderDTO extends GlobalEntity{

  @IsInt()
  @Column({ nullable: true })
  @Generated('increment')
  order_number?: number;

  @IsString()
  @Column()
  order_proforma_number: string; // numero de proforma

  @IsString()
  @Column()
  order_delivery_date: string; // fecha de entrega

  @IsString()
  @Column()
  order_delivery_way: string; // forma de entrega

  @IsString()
  @Column()
  order_providerId: string; // id del proveedor

  @IsString()
  @Column()
  order_payment_conditionId: string; // id de la condicion de pago

  @IsString()
  @Column({ nullable: true })
  order_payed_date: string;

  @IsString()
  @Column({ type: 'enum', enum: YesNo, default: YesNo.NO, nullable: true })
  @IsEnum(YesNo)
  @IsIn([YesNo.YES, YesNo.NO])
  order_is_payed: string;

  @IsString()
  @Column({ nullable: true })
  order_provider_name: string;

  @IsString()
  @Column({ type: 'enum', enum: YesNo, default: YesNo.NO, nullable: true })
  @IsEnum(YesNo)
  @IsIn([YesNo.YES, YesNo.NO])
  order_is_closed: string;

  @IsString()
  @Column()
  order_currencyId: string; // id de la moneda de pago

  @IsString()
  @Column({ nullable: true, default: 0 })
  order_total_gross: string;

  @IsString()
  @Column({ nullable: true, default: 0 })
  order_total_discount: string;

  @IsString()
  @Column({ nullable: true, default: 0 })
  order_total_itbis: string;

  @IsString()
  @Column({ nullable: true, default: 0 })
  order_total_net: string;

  @IsString()
  @Column()
  order_file: string;

  @IsString()
  @Column()
  order_observations: string; 

  @IsString()
  @Column()
  formarray_order_products: string; 

  // @BeforeInsert()
  // async beforeInsert() {
  //   const products = JSON.parse(this.formarray_order_products);
    
  //   this.order_is_closed = YesNo.NO;
  //   this.order_is_payed = YesNo.NO;

  //   // get provider name
  //   const provider = await getConnection().getRepository(ProviderEntity).findOne(JSON.parse(this.order_providerId));
  //   this.order_provider_name = provider.provider_name;

  //   products.forEach(product => {
  //     this.order_total_gross += product.order_gross_value;
  //     this.order_total_discount += product.amount_discount;
  //     this.order_total_itbis += product.itbis;
  //     this.order_total_net +=  product.order_net_value;    
  //   })

  // }
}
