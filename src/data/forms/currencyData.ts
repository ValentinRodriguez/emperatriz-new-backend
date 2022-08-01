import { StateToFilter, TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const currencyFormData: any[] = [
    {
        input_id: "currency",
        typeElement: "currency",
        type: TypeElement.input,
        form: UrlProgram.GestionDeMonedas,
        label: "Moneda",
        formControlName: "currency",
        name: "currency",
        placeholder: "Descripcion Moneda",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "currency_symbol",
        typeElement: "currency_symbol",
        type: TypeElement.input,
        form: UrlProgram.GestionDeMonedas,
        label: "Simbolo Moneda",
        formControlName: "currency_symbol",
        name: "currency_symbol",
        placeholder: "Descripcion Moneda",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "currency_description",
        typeElement: "currency_description",
        type: TypeElement.input,
        form: UrlProgram.GestionDeMonedas,
        tooltip: "Breve descripcion de la moneda",
        label: "Descripcion Moneda",
        formControlName: "currency_description",
        name: "currency_description",
        placeholder: "Descripcion Moneda",
        validations: JSON.stringify( [{ required: false}]),
        disabled: false,
        class: "field col-12 md:col-3"
    }
]