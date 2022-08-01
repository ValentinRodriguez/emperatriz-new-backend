import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { Movements } from './entities/movement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MovementController],
  imports: [
    TypeOrmModule.forFeature([Movements])
  ],
  providers: [MovementService]
})
export class MovementModule {}
