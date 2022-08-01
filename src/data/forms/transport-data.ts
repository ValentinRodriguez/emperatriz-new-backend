import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const TransportData: any[] = [
    {
        input_id: "nombre_transportista",
        type: TypeElement.input,
        form: UrlProgram.GestionDeTransportistas,
        label: "Nombre",
        formControlName: "nombre_transportista",
        name: "nombre_transportista",
        placeholder: "nombre_transportista",
        min_value: 0,
        blur: "makeDiscount",
        mode: "decimal",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-2"
    },
    {
        input_id: "teléfono_transportista",
        type: TypeElement.inputMask,
        form: UrlProgram.GestionDeTransportistas,
        label: "Teléfono",
        formControlName: "teléfono_transportista",
        name: "teléfono_transportista",
        placeholder: "teléfono_transportista",
        mask: "(999) 999-9999",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-2"
    }
]