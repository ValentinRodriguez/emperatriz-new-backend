import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const WareHouseData:any = [
    {
        input_id: "title",
        form: UrlProgram.GestionDeBodegas,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Titulo",
        formControlName: "title",
        name: "title",
        placeholder: "Nombre de la bodega",        
        validations: JSON.stringify( [{ required: true, minLength: 5 }]), 
        disabled: false,
        class: "field col-12 md:col-6"
    },
    {
        input_id: "description_warehouse",
        type: TypeElement.textarea,
        form: UrlProgram.GestionDeBodegas,
        label: "Descripcion",
        formControlName: "description_warehouse",
        name: "description_warehouse",
        placeholder: "Ingrese descripcion de la bodega",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12",
        rows: 3,
        cols: 10
    },
]