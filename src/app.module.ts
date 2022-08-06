import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { CommonModule } from './common/common.module';

import { ProductsModule } from './endpoints/products/products.module';
import { FilesModule } from './endpoints/files/files.module';
import { AuthModule } from './endpoints/auth/auth.module';
import { MessagesWsModule } from './endpoints/messages-ws/messages-ws.module';

import { typeOrmAsyncConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';
import { AccountCatalogueModule } from './endpoints/account-catalogue/account-catalogue.module';
import { APP_GUARD } from '@nestjs/core';
import { IsAuthenticatedGuard } from './endpoints/auth/guards/is-authenticated.guard';
import { UserRoleGuard } from './endpoints/auth/guards/user-role.guard';
import { BranchOfficeModule } from './endpoints/branch-office/branch-office.module';
import { EnterpriseModule } from './endpoints/enterprise/enterprise.module';
import { BrandModule } from './endpoints/brand/brand.module';
import { CategoryModule } from './endpoints/category/category.module';
import { ClientsModule } from './endpoints/clients/clients.module';
import { ColumnsModule } from './endpoints/columns/columns.module';
import { CurrencyModule } from './endpoints/currency/currency.module';
import { EmployeeModule } from './endpoints/employee/employee.module';
import { FormModule } from './endpoints/form/form.module';
import { InventoryTransactionsModule } from './endpoints/inventory-transactions/inventory-transactions.module';
import { MovementModule } from "./endpoints/movement/movement.module";
import { PaymentConditionModule } from './endpoints/payment-condition/payment-condition.module';
import { ProductTypeModule } from './endpoints/product-type/product-type.module';
import { ProviderModule } from './endpoints/provider/provider.module';
import { PurchaseOrderModule } from './endpoints/purchase-order/purchase-order.module';
import { WarehouseModule } from './endpoints/warehouse/warehouse.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname,'..','public'), 
    // }),

    AccountCatalogueModule,
    AuthModule,
    BranchOfficeModule,
    BrandModule,
    CategoryModule,
    ClientsModule,
    ColumnsModule,
    CurrencyModule,
    EmployeeModule,
    EnterpriseModule,
    FilesModule,
    FormModule,
    InventoryTransactionsModule,
    MessagesWsModule,
    MovementModule,
    PaymentConditionModule,
    ProductTypeModule,
    ProductsModule,
    ProviderModule,
    PurchaseOrderModule,   
    CommonModule,
    WarehouseModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: IsAuthenticatedGuard
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: UserRoleGuard
    // }
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
