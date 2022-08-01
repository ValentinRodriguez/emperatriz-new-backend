import { TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const PaymentConditionData:any = [
    {
        input_id: "payment_condition_description",
        form: UrlProgram.GestionDeCondicionesDePago,
        typeElement: "text",
        type: TypeElement.inputVerify,
        stateInput: "dataExiste",
        action:'verificaDataExiste',
        label: "Titulo",
        formControlName: "payment_condition_description",
        name: "payment_condition_description",
        placeholder: "Descripcion de la condicion de pago",        
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-3"
    },   
    {
        input_id: "payment_condition_days",
        type: TypeElement.inputNumber,
        form: UrlProgram.GestionDeCondicionesDePago,
        label: "Dias",
        formControlName: "payment_condition_days",
        name: "payment_condition_days",
        placeholder: "payment_condition_days",
        tooltip: 'Indica los dias de la condicion de pago(solo numeros)',
        value: 0,
        min_value: 0,
        mode: "decimal",
        validations: JSON.stringify( [{ required: true}]), 
        disabled: false,
        class: "field col-12 md:col-2"
    }, 
]