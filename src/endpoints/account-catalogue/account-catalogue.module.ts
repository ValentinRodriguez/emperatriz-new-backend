import { Module } from '@nestjs/common';
import { AccountCatalogueService } from './account-catalogue.service';
import { AccountCatalogueController } from './account-catalogue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountCatalogueEntity } from './entities/account-catalogue.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [AccountCatalogueController],
  providers: [AccountCatalogueService],
  imports: [
    TypeOrmModule.forFeature([AccountCatalogueEntity]),
    AuthModule
  ],
  exports: [  
    AccountCatalogueService,
    TypeOrmModule
  ]
})
export class AccountCatalogueModule {}
