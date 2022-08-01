import { Module } from '@nestjs/common';
import { PaymentConditionService } from './payment-condition.service';
import { PaymentConditionController } from './payment-condition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentConditionEntity } from './entities/payment-condition.entity';

@Module({
  controllers: [PaymentConditionController],
  imports: [
    TypeOrmModule.forFeature([PaymentConditionEntity])
  ],
  providers: [PaymentConditionService]
})
export class PaymentConditionModule {}
