import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderEntity } from './entities/provider.entity';

@Module({
  controllers: [ProviderController],
  imports: [
    TypeOrmModule.forFeature([ProviderEntity])
  ],
  providers: [ProviderService]
})
export class ProviderModule {}
