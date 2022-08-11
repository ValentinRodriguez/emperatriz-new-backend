import { CreateColumnInput } from "../endpoints/columns/dto/create-column.input";
import { StateToFilter, TypeColumn, UrlProgram } from "../utils/global-table-enum";

export const columnData: CreateColumnInput[] = [
    {
        form: UrlProgram.GestionDeProductos,
        state: StateToFilter.Product,
        columns: JSON.stringify(
            [
                {field: "image", header:"", type:TypeColumn.Image}, 
                {field: "code", header:"Codigo", type:TypeColumn.Number },
                {field: "price", header: "Precio", type: TypeColumn.Price },
                {field: "discount", header: "Descuento %", type: TypeColumn.Discount },
                {field: "discount_price", header: "Precio Final", type: TypeColumn.Price },
                {field: "categoryId", header: "Categoria", type: TypeColumn.Text },
                {field: "brandId", header: "Marca", type: TypeColumn.Text },
                {field: "productTypeId", header: "Tipo Producto", type: TypeColumn.Text },
                {field: "warehouseId", header: "Bodega", type: TypeColumn.Text },
                {field: "stock_quantity", header: "Cantidad", type: TypeColumn.Number },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeBodegas,
        state: StateToFilter.Warehouse,
        columns: JSON.stringify(
            [
                {field: "id", header: "ID", type: TypeColumn.Text },
                {field: "title", header: "Bodega", type: TypeColumn.Text },
                {field: "description_warehouse", header: "Descripcion", type: TypeColumn.Text },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeMarcas,
        state: StateToFilter.Brand,
        columns: JSON.stringify(
            [
                {field: "id", header: "ID", type: TypeColumn.Text },
                {field: "title_brand", header: "Descripcion", type: TypeColumn.Text },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeCategorias,
        state: StateToFilter.Category,
        columns: JSON.stringify(
            [
                {field: "id", header: "ID", type: TypeColumn.Text },
                {field: "title", header: "Descripcion", type: TypeColumn.Text },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeOrdenesCompras,
        state: StateToFilter.PurchaseOrder,
        columns: JSON.stringify(
            [
                {field: "order_number" , header: "Numero Orden ", type: TypeColumn.Number},
                {field: "order_proforma_number" , header: "Proforma ", type: TypeColumn.Text},
                {field: "order_provider_name", header: "Proveedor", type: TypeColumn.Text},
                {field: "order_delivery_date", header: "Fecha Orden", type: TypeColumn.Text},
                {field: "order_payed_date", header: "Fecha pago", type: TypeColumn.Text},
                {field: "order_is_payed", header: "Pagado", type: "affirmation"},
                {field: "order_is_closed", header: "Cerrada", type: "affirmation"},
                {field: "order_currencyId", header: "Moneda", type: TypeColumn.Price},
                {field: "order_total_gross", header: "Total Bruto", type: TypeColumn.Price},
                {field: "order_total_discount", header: "Total Descuento", type: TypeColumn.Price},
                {field: "order_total_itbis", header: "Total ITBIS", type: TypeColumn.Price},
                {field: "order_total_net", header: "Total Neto", type: TypeColumn.Price},
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeTipoProductos,
        state: StateToFilter.ProductType,
        columns: JSON.stringify(
            [
                {field: "id", header: "ID", type: TypeColumn.Text },
                {field: "title_productType", header: "Descripcion", type: TypeColumn.Text },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionTiposMovimientos,
        state: StateToFilter.Movement,
        columns: JSON.stringify(
            [
                { field: 'title', header: 'Titulo' , type: TypeColumn.Text},
                { field: 'description_movement', header: 'Descripción' , type: TypeColumn.Text},
                { field: 'origin_movement', header: 'Origen' , type: TypeColumn.Text},
                { field: 'client_control_movement', header: 'Clientes' , type: "affirmation"},
                { field: 'dispatch_control_movement', header: 'Despachos' , type: "affirmation"},
                { field: 'department_control_movement', header: 'Departamento' , type: "affirmation"},
                { field: 'refund_control_movement', header: 'Devoluciones' , type: "affirmation"},
                { field: 'transfer_control_movement', header: 'Transferencia' , type: "affirmation"},
                { field: 'buy_order_control_movement', header: 'Compra' , type: "affirmation"},
                { field: 'acciones', header: 'Acciones' , type: TypeColumn.Actions},
            ]
        )
    },
    {
        form: UrlProgram.GestionDeTransportistas,
        state: "",
        columns: JSON.stringify(
            [
                { field: 'id', header: 'Código'},
                { field: 'nombre', header: 'Nombre'},
                { field: 'telefono', header: 'Teléfono'},
                { field: 'acciones', header: 'Acciones'}
            ]
        )
    },
    {
        form: UrlProgram.MiEmpresa,
        state: StateToFilter.Enterprise,
        columns: JSON.stringify(
            [
                {field: "id", header: "ID", type: TypeColumn.Text },
                {field: "enterprise_name", header: "Nombre", type: TypeColumn.Text },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeUsuarios,
        state: StateToFilter.User,
        columns: JSON.stringify(
            [
                {field: "id", header: "ID", type: TypeColumn.Text },   
                {field: "username", header: "Usuario", type: TypeColumn.Text },
                {field: "user_email", header: "Email", type: TypeColumn.Text },
                {field: "role", header: "Rol", type: TypeColumn.Text },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeMonedas,
        state: StateToFilter.Currency,
        columns: JSON.stringify(
            [
                {field: "currency", header: "Divisa", type: TypeColumn.Text },
                {field: "currency_symbol", header: "Símbolo", type: TypeColumn.Text },
                {field: "currency_description", header: "Descripcion", type: TypeColumn.Text },   
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
    {
        form: UrlProgram.GestionDeProveedores,
        state: StateToFilter.Provider,
        columns: JSON.stringify(
            [
                { field: 'provider_name', header: 'Proveedor', type: TypeColumn.Text },
                { field: 'contact_sp', header: 'Contacto', type: TypeColumn.Text },
                { field: 'phone_sp', header: 'Teléfono', type: TypeColumn.Text },
                { field: 'email_provider', header: 'Email', type: TypeColumn.Text },
                { field: 'address_provider', header: 'Dirección', type: TypeColumn.Text },
                { field: 'actions', header: 'Acciones', type: TypeColumn.Actions },
            ]
        )
    },
    {
        form: "gestion-catalogo-cuentas",
        state: StateToFilter.AccountCatalogue,
        columns: JSON.stringify(
            [
                { field: 'id', header: 'ID', type: TypeColumn.Text},
                { field: 'account_catalogue_description', header: 'Descripcion', type: TypeColumn.Text},
                { field: 'account_catalogue_level', header: 'Nivel', type: TypeColumn.Number},
                { field: 'account_catalogue_origin', header: 'Origen', type: TypeColumn.Text},
                { field: 'account_catalogue_group', header: 'Grupo', type: TypeColumn.Text},
                { field: 'account_catalogue_account', header: 'Cuenta', type: TypeColumn.Number},
                { field: 'account_catalogue_account_applicable', header: 'Aplicable a', type: TypeColumn.Text},
                { field: 'account_catalogue_retention_code', header: 'Codigo', type: TypeColumn.Number},
                { field: 'account_catalogue_account_type', header: 'Tipo', type: TypeColumn.Text},
                { field: 'account_catalogue_analityc', header: 'Analitico', type: TypeColumn.Text},
                { field: 'account_catalogue_catalogue', header: 'Catalogo', type: TypeColumn.Text},
                { field: 'account_catalogue_departament', header: 'Departamento', type: TypeColumn.Actions}
            ]
        )
    },
    {
        form: "gestion-transacciones-inventario",
        state: StateToFilter.Provider,
        columns: JSON.stringify(
            [
                { field: 'id', header: 'ID', type: TypeColumn.Text },
                { field: 'id_movement_type', header: 'Movimiento', type: TypeColumn.Text },
                { field: 'condition_receipt', header: 'Teléfono', type: TypeColumn.Text },                
                { field: 'actions', header: 'Acciones', type: TypeColumn.Actions },
            ]
        )
    },
    {
        form: "gestion-de-condiones-de-pago",
        state: StateToFilter.PaymentsCondition,
        columns: JSON.stringify(
            [
                {field: "payment_condition_description", header: "Descripcion", type: TypeColumn.Text },
                {field: "payment_condition_days", header: "Dias", type: TypeColumn.Number },
                {field: "actions", header: "Acciones", type: TypeColumn.Actions }
            ]
        )
    },
]