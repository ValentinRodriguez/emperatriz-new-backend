
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Currencies } from '../../endpoints/currency/entities/currency.entity';
import { currencyData } from '../../data/currency-data';

const inputCurrencyData = currencyData

export class InputCurrencyCreateSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await getManager().query('TRUNCATE currencies');
        
        for (const inputCurrency of inputCurrencyData) {
            await factory(Currencies)().create(inputCurrency);
        }     
    }
}