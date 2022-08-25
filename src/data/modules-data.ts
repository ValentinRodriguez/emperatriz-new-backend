import { v4 as uuidv4 } from 'uuid';
import { ValidRoles } from '../endpoints/auth/interfaces';

export const modulesData: any[] = [
    {
        label: 'Panel de control', 
        module: ValidRoles.CONTROL_PANEL,
        icon: 'pi pi-fw pi-cog',
        programs: [
            { 
                id: uuidv4(),
                label: 'Gestion de usuarios', 
                icon: 'pi pi-fw pi-desktop', 
                routerLink: 'programa/panel-control/gestion-de-usuarios', 
                descripcion: 'menu de gestion de usuarios' 
            },
            
        ]
    },
    {
        label: 'Mi Negocio', icon: 'pi pi-fw pi-building',
        module: ValidRoles.MY_BUSINESS,
        programs: [
            { id: uuidv4(), label: 'Mi empresa', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/mi-negocio/mi-empresa' },
            { id: uuidv4(), label: 'Gestion de monedas', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/mi-negocio/gestion-de-monedas' },
            { id: uuidv4(), label: 'Gestion de sucursales', descripcion: 'menu de gestion de la empresa', icon: 'pi pi-fw pi-desktop', routerLink : 'programa/mi-negocio/gestion-de-sucursales'},
        ]
    },
    {
        label: 'Inventario', icon: 'pi pi-fw pi-box',
        module: ValidRoles.INVENTORY,
        programs: [
            { id: uuidv4(), label: 'Gestion de productos',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-productos'},
            { id: uuidv4(), label: 'Gestion de bodegas',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-bodegas'},
            { id: uuidv4(), label: 'Gestion de marcas',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-marcas'},
            { id: uuidv4(), label: 'Gestion de categorias',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-categorias'},                            
            { id: uuidv4(), label: 'Gestion de tipo de productos',descripcion: 'menu de gestion de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-tipo-productos'},
            // { id: uuidv4(), label: 'Gestion de atributos',descripcion: 'menu de gestion de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-atributos'},
            { id: uuidv4(), label: 'Gestion de tipos de movimientos',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-tipos-movimientos'},
            { id: uuidv4(), label: 'Transacciones de inventario',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-transacciones-inventario'},
            { id: uuidv4(), label: 'Conteo de productos',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/conteo-productos'},
            { id: uuidv4(), label: 'Gestion de transportistas',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/inventario/gestion-de-transportistas'},
            { id: uuidv4(), label: 'Reporte de catalogo de productos',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-file',routerLink: 'programa/inventario/reporte-catalogo-productos'},
            { id: uuidv4(), label: 'Reporte de operaciones por movimientos',descripcion: 'menu de inventario', icon: 'pi pi-fw pi-file',routerLink: 'programa/inventario/reporte-operaciones-por-movimientos'},
            { id: uuidv4(), label: 'Consulta existencias por almacenes',descripcion: 'menu de gestion de inventario', icon: 'pi pi-fw pi-file',routerLink: 'programa/inventario/gestion-existencias-almacenes'}
        ]
    },
    {
        label: 'Ventas', icon: 'pi pi-fw pi-chart-line',
        module: ValidRoles.SALES,
        programs: [
            { id: uuidv4(), label: 'Interfaz de ventas',descripcion: 'modulo de ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'pos-system'}, //
            // { id: uuidv4(), label: 'Generacion formulario 607',descripcion: 'Modulo ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/generacion_formulario_607'},
            { id: uuidv4(), label: 'Ofertas y Promociones',descripcion: 'Modulo ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/ofertas-promociones'},
            { id: uuidv4(), label: 'Gestion de clientes',descripcion: 'Modulo ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/gestion-de-clientes'},
            { id: uuidv4(), label: 'Gestion ordenes de pedidos',descripcion: 'Modulo ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/gestion-de-ordenes-de-pedidos'},
            { id: uuidv4(), label: 'Gestion de cotizaciones',descripcion: 'Modulo ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/gestion-de-cotizaciones'},
            { id: uuidv4(), label: 'Condiciones de pago',descripcion: 'modulo de ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/gestion-de-condiones-de-pago'},
            { id: uuidv4(), label: 'Tabla de amortizaciones',descripcion: 'modulo de ventas',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/ventas/tabla-amortizaciones'}                
        ]
    },
    {
        label: 'Compras', icon: 'pi pi-fw pi-shopping-bag',
        module: ValidRoles.SHOPPING,
        programs: [
            { id: uuidv4(), label: 'Gestion de ordenes de compras', descripcion: 'menu de compras',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/compras/gestion-de-ordenes-compras'},
            { id: uuidv4(), label: 'Gestion de proveedores', descripcion: 'menu de compras',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/compras/gestion-de-proveedores'},
            { id: uuidv4(), label: 'Gestion de requisiciones', descripcion: 'menu de compras',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/compras/gestion-de-requisiciones'},                            
            { id: uuidv4(), label: 'Gestion de direcciones de envio', descripcion: 'menu de compras',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/compras/gestion-direcciones-envio'},
            { id: uuidv4(), label: 'Catalogo de proveedores', descripcion: 'menu de compras',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/compras/catalogo-de-proveedores'}                
        ]
    },
    {
        label: 'Contabilidad General', icon: 'pi pi-fw pi-dollar',
        module: ValidRoles.GENERAL_ACCOUNTING,
        programs: [
            { id: uuidv4(), label: 'Gestion del catalogo cuentas', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/gestion-catalogo-cuentas'},
    //         { id: uuidv4(), label: 'Diario General', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-file', routerLink: 'programa/contabilidad-general/reporte-diario-general'},
    //         { id: uuidv4(), label: 'periodo fiscales', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/gestion-periodos-fiscales'},
    //         { id: uuidv4(), label: 'Entradas de diario', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/gestion-entradas-diario'},
    //         { id: uuidv4(), label: 'Transacciones de pago', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/gestion-transacciones-pago'},
            { id: uuidv4(), label: 'Reporte Catalogo Cuentas', descripcion: 'Imprime Carta de cuentas', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/reporte-catalogo'},
    //         { id: uuidv4(), label: 'Gastos por departamento', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/gastos-departamento'},
    //         { id: uuidv4(), label: 'reporte mayor general', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/reporte-mayor-general'},
            { id: uuidv4(), label: 'Cuadre de caja', descripcion: 'menu de contabilidad general', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/cuadre-caja'},
    //         { id: uuidv4(), label: 'Gestion Codigos Estados Financieros', descripcion: 'Adiciona, Modifica identificador punto Estaods', icon: 'pi pi-fw pi-desktop', routerLink: 'programa/contabilidad-general/gestion-estados'},

        ]
    },
    {
        label: 'Recursos Humanos', icon: 'pi pi-fw pi-users',
        module: ValidRoles.HUMAN_RESOURCES,
        programs: [
            { id: uuidv4(), label: 'Gestion de empleados', descripcion: 'Modulo RR.HH', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/recursos-humanos/gestion-de-empleados'},
            { id: uuidv4(), label: 'Gestion de puestos', descripcion: 'Modulo RR.HH', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/recursos-humanos/gestion-de-puestos'},
            { id: uuidv4(), label: 'Gestion de departamentos', descripcion: 'Modulo RR.HH', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/recursos-humanos/gestion-de-departamentos'},
            { id: uuidv4(), label: 'gestion de turnos', descripcion: 'menu de gestion de la empresa', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/recursos-humanos/gestion-tipo-turnos'},
            { id: uuidv4(), label: 'gestion de areas empresa', descripcion: 'menu de gestion de la empresa', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/recursos-humanos/gestion-de-areas'},

        ]
    },
    {
        label: 'Cuentas por Pagar', 
        module: ValidRoles.ACCOUNTS_TO_PAY,
        icon: 'pi pi-fw pi-percentage',
        programs: [
            { id: uuidv4(), label: 'Analisis de Saldo', descripcion: 'Modulo Cuentas por pagar', icon: 'pi pi-fw pi-file',routerLink: 'programa/cuentas-por-pagar/reporte-analisis-saldo' },
            { id: uuidv4(), label: 'Facturas de proveedores', descripcion: 'Modulo Cuentas por pagar', icon: 'pi pi-fw pi-desktop',routerLink: 'programa/cuentas-por-pagar/gestion-factura-proveedores' }                            
        ]
    },
    {
        label: 'Cuentas por Cobrar', 
        module: ValidRoles.ACCOUNTS_TO_RECEIVE,
        icon: 'pi pi-fw pi-money-bill',
        programs: []
    },
    {
        label: 'Tienda Online', 
        icon: 'pi pi-fw pi-shopping-cart',
        module: ValidRoles.ONLINE_SHOP,
        programs: [
           { id: uuidv4(), label: 'Creacion de productos tienda', descripcion: 'Modulo creacion de productos',icon: 'pi pi-fw pi-desktop', routerLink: 'programa/tienda-online/creacion-productos-plaza'}

        ]
    }
   
]