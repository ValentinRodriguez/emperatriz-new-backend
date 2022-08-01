import { StateToFilter, TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const ProductData:any = [
    {
        input_id: "name",
        form: UrlProgram.GestionDeProductos,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",  
        action:'verificaDataExiste',
        label: "Nombre",
        formControlName: "name",
        name: "name",
        placeholder: "Nombre del producto",
        validations: JSON.stringify( [{ required: true, minLength: 5 }] ),      
        disabled: false,       
        class: "field col-12 md:col-4"
    },
    {
        input_id: "categoryId",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProductos,
        label: "Categoria",
        optionLabel: "title_category",
        formControlName: "categoryId",
        name: "categoryId",
        placeholder: "Seleccione categoria",
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.Category,       
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-2"
    },
    {
        input_id: "brand",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProductos,
        label: "Marca",
        optionLabel: "title_brand",
        formControlName: "brandId",
        name: "brand",
        placeholder: "Seleccione marca",
        suggestions: "dataToSohowOnAutoCompletes",
        stateToFilter: StateToFilter.Brand,        
        click: "filterOnAutoComplete",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-2"
    }, 
    {
        input_id: "productType",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProductos,
        label: "Tipo de Producto",
        optionLabel: "title_productType",
        formControlName: "productTypeId",
        name: "productType",
        placeholder: "Seleccione tipo de producto",
        suggestions: "dataToSohowOnAutoCompletes",
        stateToFilter: StateToFilter.ProductType,       
        click: "filterOnAutoComplete",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        field: "suggestion",
        class: "field col-12 md:col-2"
    },
    {
        input_id: "wareHouse",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProductos,
        label: "Bodega",
        optionLabel: "title_warehouse",
        formControlName: "warehouseId",
        name: "warehouseId",
        placeholder: "Seleccione bodega",
        suggestions: "dataToSohowOnAutoCompletes",
        stateToFilter: StateToFilter.Warehouse,        
        click: "filterOnAutoComplete",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        field: "suggestion",
        class: "field col-12 md:col-2"
    },   
    {
        input_id: "price",
        type: TypeElement.inputNumber,
        form: UrlProgram.GestionDeProductos,
        label: "Precio",
        formControlName: "price",
        name: "price",
        placeholder: "price",
        tooltip: 'Indica el precio de venta del producto',
        value: 0,
        min_value: 0,
        blur: "makeDiscount",
        mode: "decimal",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-2"
    }, 
    {
        input_id: "discount",
        type: TypeElement.inputNumber,
        form: UrlProgram.GestionDeProductos,
        label: "Descuento",
        formControlName: "discount",
        name: "discount",
        placeholder: "discount",
        tooltip: 'Indica el descuento del producto en porcentaje (%)',
        value: 0,	
        min_value: 0,
        max_value: 100,
        blur: "makeDiscount",
        mode: "decimal",
        validations: JSON.stringify( [{ required: false}]), 
        disabled: false,
        class: "field col-12 md:col-2"
    },
    {
        input_id: "discount_price",
        type: TypeElement.inputNumber,
        form: UrlProgram.GestionDeProductos,
        label: "Precio final",
        formControlName: "discount_price",
        tooltip: 'Indica el precio con descuento aplicado',
        name: "discount_price",
        placeholder: "discount_price",
        value: 0,        
        mode: "decimal",
        validations: JSON.stringify( [{ required: true }]), 
        disabled: true, 
        class: "field col-12 md:col-2"
    },
    {
        input_id: "description",
        type: TypeElement.textarea,
        form: UrlProgram.GestionDeProductos,
        label: "Descripcion",
        formControlName: "description",
        name: "description",
        placeholder: "Ingrese descripcion del producto",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12",
        rows: 3,
        cols: 10
    },  
    {
    input_id: "width",
    type: TypeElement.inputNumber,
    form: UrlProgram.GestionDeProductos,
    label: "Anchura",
    formControlName: "width",
    name: "width",
    placeholder: "width",
    value: 0,
    mode: "decimal",
    validations: JSON.stringify( [{ required: false}]), 
    disabled: false,
    class: "field col-12 md:col-1"
    },
    {
    input_id: "height",
    type: TypeElement.inputNumber,
    form: UrlProgram.GestionDeProductos,
    label: "Altura",
    formControlName: "height",
    name: "height",
    placeholder: "height",
    value: 0,
    mode: "decimal",
    validations: JSON.stringify( [{ required: false}]), 
    disabled: false,
    class: "field col-12 md:col-1"
    },
    {
    input_id: "weight",
    type: TypeElement.inputNumber,
    form: UrlProgram.GestionDeProductos,
    label: "Peso",
    formControlName: "weight",
    name: "weight",
    placeholder: "weight",
    value: 0,
    mode: "decimal",
    validations: JSON.stringify( [{ required: false}]), 
    disabled: false,
    class: "field col-12 md:col-1"
    },
    {
    input_id: "purchase_note",
    type: TypeElement.textarea,
    form: UrlProgram.GestionDeProductos,
    label: "Nota adicional",
    formControlName: "purchase_note",
    name: "purchase_note",
    placeholder: "Notas de compra y envío",
    validations: JSON.stringify( [{ required: false}]), 
    disabled: false,
    class: "field col-12",
    rows: 3
    },
    {
    input_id: "image",
    type: TypeElement.file,
    form: UrlProgram.GestionDeProductos,
    label: "Imagenes del producto",
    formControlName: "image",
    name: "image",
    placeholder: "Escoja Imagen",
    multiple: "multiple",
    accept: "image/*",
    maxFileSize: 5000000,   
    invalidFileSizeMessageSummary: "Tamaño de archivo excedido, ",	
    invalidFileSizeMessageDetail: "El tamaño del archivo no puede ser mayor a {0}.",	
    invalidFileTypeMessageSummary: "Tipo de archivo incorrecto",
    invalidFileTypeMessageDetail: "tipo de archivo permitido es {0}.",
    invalidFileLimitMessageSummary: "Cantitidad maxima de archivos superada",
    invalidFileLimitMessageDetail: "el número máximo de archivos es {0}.",	
    showUploadButton: false,
    validations: JSON.stringify( [{ required: false}]), 
    disabled: false,
    class: "col-12",
    cancelLabel: "Cancelar",
    },
]