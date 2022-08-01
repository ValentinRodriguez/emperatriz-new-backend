import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const AttributeData:any = [
    {
        input_id: "titulo_atributo",
        form: UrlProgram.GestionDeAtributos,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Titulo",
        formControlName: "titulo_atributo",
        name: "titulo_atributo",
        placeholder: "Nombre del atributo",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-6"
    }
]