import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const ProductType:any = [
    {
        input_id: "title_productType",
        form: UrlProgram.GestionDeTipoProductos,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Titulo",
        formControlName: "title_productType",
        name: "title_productType",
        placeholder: "Nombre del tipo de producto",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-6"
    }
]