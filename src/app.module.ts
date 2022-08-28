import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common/common.module';

import { AuthModule } from './endpoints/auth/auth.module';
import { FilesModule } from './endpoints/files/files.module';
import { MessagesWsModule } from './endpoints/messages-ws/messages-ws.module';
import { ProductsModule } from './endpoints/products/products.module';

import { typeOrmAsyncConfig } from './config/typeorm.config';
import { AccountCatalogueModule } from './endpoints/account-catalogue/account-catalogue.module';
// import { UserRoleGuard } from './endpoints/auth/guards/user-role.guard';
import { APP_GUARD } from '@nestjs/core';
import { IsAuthenticatedGuard } from './endpoints/auth/guards/is-authenticated.guard';
import { BranchOfficeModule } from './endpoints/branch-office/branch-office.module';
import { BrandModule } from './endpoints/brand/brand.module';
import { CategoryModule } from './endpoints/category/category.module';
import { ClientsModule } from './endpoints/clients/clients.module';
import { ColumnsModule } from './endpoints/columns/columns.module';
import { CurrencyModule } from './endpoints/currency/currency.module';
import { EmployeeModule } from './endpoints/employee/employee.module';
import { EnterpriseModule } from './endpoints/enterprise/enterprise.module';
import { FormModule } from './endpoints/form/form.module';
import { InventoryTransactionsModule } from './endpoints/inventory-transactions/inventory-transactions.module';
import { ModulesModule } from './endpoints/modules/modules.module';
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
    WarehouseModule,
    ModulesModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: IsAuthenticatedGuard
    }
  ],
})
export class AppModule {}
