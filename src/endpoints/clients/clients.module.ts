import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';

@Module({
  controllers: [ClientsController],
  imports: [
    TypeOrmModule.forFeature([ClientEntity])
  ],
  providers: [ClientsService]
})
export class ClientsModule {}
