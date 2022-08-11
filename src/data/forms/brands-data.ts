import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const BrandsData:any = [
    {
        input_id: "title",
        form: UrlProgram.GestionDeMarcas,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Titulo",
        formControlName: "title",
        name: "title",
        placeholder: "Nombre de la marca",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-6"
    }
]