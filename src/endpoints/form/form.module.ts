import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormEntity } from './entities/form.entity';

@Module({
  imports:[    
    TypeOrmModule.forFeature([
      FormEntity
    ])
  ],
  providers: [FormController, FormService]
})
export class FormModule {}
