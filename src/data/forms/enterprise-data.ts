import { StateToFilter, TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const enterpriseData: any[] = [
    {
        input_id: "enterprise_name",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.MiEmpresa,
        label: "Nombre",
        formControlName: "enterprise_name",
        name: "enterprise_name",
        placeholder: "nombre",
        validations: JSON.stringify( [{ required: true, minLength: 5}]),
        disabled: false,
        class: "field col-12 md:col-3"
    }, 
    {
        input_id: "enterprise_document_type",
        type: TypeElement.autoComplete,
        form: UrlProgram.MiEmpresa,
        label: "Documento",
        optionLabel: "enterprise_name",
        formControlName: "enterprise_document_type",
        name: "enterprise_document_type",
        placeholder: "Seleccione documento",
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.Enterprise,
        validations: JSON.stringify( [{ required: true, minLength: 5}]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-2"
    },
    {
        input_id: "dni",
        type: TypeElement.input,
        form: UrlProgram.MiEmpresa,
        label: "Cedula",
        formControlName: "dni",
        name: "dni",
        placeholder: "dni",
        mask: "999-99999999-9",
        validations: JSON.stringify( [{ required: true, maxLength: 11}]),
        disabled: false,
        class: "field col-12 md:col-2"
    },
    {
        input_id: "rnc",
        type: TypeElement.input,
        form: UrlProgram.MiEmpresa,
        label: "RNC",
        formControlName: "rnc",
        name: "rnc",
        placeholder: "rnc",
        mask: "999-99999999-9",
        validations: JSON.stringify( [{ required: true, maxLength: 11}]),
        disabled: false,
        class: "field col-12 md:col-2"
    },
    {
        input_id: "enterprise_phone",
        type: TypeElement.input,
        form: UrlProgram.MiEmpresa,
        label: "Teléfono",
        formControlName: "enterprise_phone",
        name: "enterprise_phone",
        placeholder: "Teléfono",
        mask: "(999)-999-9999",
        validations: JSON.stringify( [{ required: true, maxLength: 11}]),
        disabled: false,
        class: "field col-12 md:col-2"
    },
    {
        input_id: "enterprise_email",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.MiEmpresa,
        label: "Email",
        formControlName: "enterprise_email",
        name: "enterprise_email",
        placeholder: "email",
        validations: JSON.stringify( [{ required: true, emailValidation: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    }
]