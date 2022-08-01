import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Forms } from './entities/form.entity';

@Module({
  controllers: [FormController],
  imports:[    
    TypeOrmModule.forFeature([ Forms ])
  ],
  providers: [FormController, FormService]
})
export class FormModule {}
