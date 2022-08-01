import { StateToFilter, TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const ProviderData: any[] = [
    {
        input_id: "provider_name",
        form: UrlProgram.GestionDeProveedores,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Nombre del proveedor",
        formControlName: "provider_name",
        name: "provider_name",       
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "email_provider",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.GestionDeProveedores,
        label: "email",
        formControlName: "email_provider",
        name: "email_provider",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "contact_sp",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.GestionDeProveedores,
        label: "persona de Contacto",
        formControlName: "contact_sp",
        name: "contact_sp",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "phone_sp",
        typeElement: "text",
        type: TypeElement.inputMask,
        form: UrlProgram.GestionDeProveedores,
        label: "teléfono Contacto",
        formControlName: "phone_sp",
        name: "phone_sp",    
        mask: "(999) 999-9999",    
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "document_type",
        type: TypeElement.dropdown,
        form: UrlProgram.GestionDeProveedores,
        label: "Tipo de documento",
        formControlName: "document_type",
        placeholder: "Seleccione cuenta",
        name: "document_type",
        class: "field col-12 md:col-3",	
        options: JSON.stringify([
            {name: 'RNC', id: 'rnc'},
            {name: 'Cedula', id: 'cedula'},
            {name: 'Pasaporte', id: 'pasaporte'},
        ]),
        optionLabel: "name",
        optionValue: "id",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
    },    
    {
        input_id: "document_id",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.GestionDeProveedores,
        label: "Numero de documento",
        formControlName: "document_id",
        name: "document_id",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-3"
    }, 
    {
        input_id: "account_accountant",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProveedores,
        label: "Cuenta Contable",
        optionLabel: "account_catalogue_description",
        formControlName: "account_accountant",
        name: "account_accountant",        
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.AccountCatalogue,       
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-3"
    }, 

    {
        input_id: "payment_condition",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProveedores,
        label: "Condiciones de pago",
        optionLabel: "payment_condition_description",
        formControlName: "payment_condition",
        name: "payment_condition",        
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.PaymentsCondition,       
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-3"
    },
    {
        input_id: "currency_provider",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeProveedores,
        label: "Moneda de pago",
        optionLabel: "currency",
        formControlName: "currency_provider",
        name: "currency_provider",        
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.Currency,        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-3"
    },
    {
        input_id: "address_provider",
        type: TypeElement.textarea,
        form: UrlProgram.GestionDeProveedores,
        label: "direccion",
        formControlName: "address_provider",
        name: "address_provider",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12",
        rows: 3,
        cols: 10
    }
]