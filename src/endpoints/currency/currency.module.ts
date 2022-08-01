import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CurrencyEntity } from './entities/currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CurrencyController],
  imports: [
    TypeOrmModule.forFeature([CurrencyEntity])
  ],
  providers: [CurrencyService]
})
export class CurrencyModule {}
