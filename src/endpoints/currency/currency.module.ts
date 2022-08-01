import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { Currencies } from './entities/currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CurrencyController],
  imports: [
    TypeOrmModule.forFeature([Currencies])
  ],
  providers: [CurrencyService]
})
export class CurrencyModule {}
