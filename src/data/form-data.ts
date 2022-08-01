
import { AccounCatalogueData } from "./forms/account-catalogue-data";
import { AttributeData } from "./forms/attribute-data";
import { BranchData } from "./forms/branch-data";
import { BrandsData } from "./forms/brands-data";
import { CategoryData } from "./forms/categoryData";
import { currencyFormData } from "./forms/currencyData";
import { enterpriseData } from "./forms/enterprise-data";
import { InventoryTransactionData } from "./forms/InventoryTransactionData";
import { MovementType } from "./forms/movement-type";
import { PaymentConditionData } from "./forms/payment-condition";
import { ProductType } from "./forms/product-type";
import { ProductData } from "./forms/product_data";
import { ProviderData } from "./forms/provider-data";
import { TransportData } from "./forms/transport-data";
import { UserData } from "./forms/user-data";
import { WareHouseData } from "./forms/warehouse-data";
import { PurchasOrderOrderData } from "./forms/buy-order-data";

export const formData: any = [

    // GESTION DE PRODUCTOS
    ...ProductData,
    
    // GESTION DE BODEGAS
   ...WareHouseData,

    // GESTION DE MARCAS
    ...BrandsData,

    // GESTION DE CATEGORIAS
    ...CategoryData,

    // GESTION DE ATRIBUTOS
    ...AttributeData,

    // GESTION DE TIPO DE PRODUCTOS
    ...ProductType,

    // GESTION DE TIPO DE MOVIMIENTOS
    ...MovementType,

    // TRANSACCIONES DE INVENTARIO 
    ...InventoryTransactionData,

    // GESTION DE TRANSPORTISTAS      
    ...TransportData,

    // GESTION DE PROVEEDORES
    ...ProviderData,

    // GESTION DE MI EMPRESA   
    ...enterpriseData,

    // GESTION DE USUARIOS
   ...UserData,

    // GESTION DE MONEDAS 
    ...currencyFormData,

    // GESTION DE SUCURSALES
    ...BranchData,

    // GESTION DEL CATALOGO DE CUENTAS
    ...AccounCatalogueData,

    //CONDICIONES DE PAGO
    ...PaymentConditionData,

    // GESTION DE CUENTAS
    ...PurchasOrderOrderData
]

