import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { MovementEntity } from './entities/movement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MovementController],
  imports: [
    TypeOrmModule.forFeature([MovementEntity])
  ],
  providers: [MovementService]
})
export class MovementModule {}
