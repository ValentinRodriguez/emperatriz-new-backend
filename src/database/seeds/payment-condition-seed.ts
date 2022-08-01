
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PaymentConditionData } from '../../data/payment-condition';
import { PaymentConditions } from '../../endpoints/payment-condition/entities/payment-condition.entity';

const inputPaymentConditionData = PaymentConditionData

export class InputPaymentConditionCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE payment_conditions');
        
        for (const inputPaymentCondition of inputPaymentConditionData) {
            await factory(PaymentConditions)().create(inputPaymentCondition);
        }     
    }
}