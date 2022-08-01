import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const CategoryData:any = [
    {
        input_id: "title_category",
        form: UrlProgram.GestionDeCategorias,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Titulo",
        formControlName: "title_category",
        name: "title_category",
        placeholder: "Nombre de la categoria",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-6"
    }
]