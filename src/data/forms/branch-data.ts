import { StateToFilter, TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const BranchData: any[] = [
    {
        input_id: "branch_description",
        typeElement: "branch_description",
        type: TypeElement.input,
        form: UrlProgram.GestionDeSucursales,
        label: "Descripcion",
        formControlName: "branch_description",
        name: "branch_description",
        placeholder: "Descripcion sucursal",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "enterpriseId",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeSucursales,        
        label: "Moneda",
        optionLabel: "enterpriseId",
        formControlName: "enterpriseId",
        name: "enterpriseId",
        placeholder: "Empresa a la que pertenece",
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.Enterprise,
        validations: JSON.stringify( [{ required: true }]), 
        disabled: true, 
        field: "suggestion",
        class: "field col-12 md:col-3"
    },
    {
        input_id: "branch_addres",
        type: TypeElement.textarea,
        form: UrlProgram.GestionDeSucursales,
        label: "Direccion",
        formControlName: "branch_addres",
        name: "branch_addres",
        placeholder: "Ingrese direccion",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12",
        rows: 3,
        cols: 10
    }
]