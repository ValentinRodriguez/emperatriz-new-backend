import { StateToFilter, TypeElement, UrlProgram } from "../../utils/global-table-enum";

export const UserData:any = [
    {
        input_id: "user_employer",
        type: TypeElement.autoComplete,
        form: UrlProgram.GestionDeUsuarios,        
        label: "Empleado",
        optionLabel: "first_name",
        formControlName: "user_employer",
        name: "user_employer",
        placeholder: "Seleccione empleado",
        suggestions: "dataToSohowOnAutoCompletes",        
        click: "filterOnAutoComplete",
        stateToFilter: StateToFilter.Employee,
        validations: JSON.stringify( [{ required: true }]), 
        disabled: false, 
        field: "suggestion",
        class: "field col-12 md:col-3"
    },
    {
        input_id: "email",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.GestionDeUsuarios, 
        label: "Email",
        formControlName: "email",
        name: "email",
        placeholder: "Email",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "username",
        typeElement: "text",
        type: TypeElement.input,
        form: UrlProgram.GestionDeUsuarios, 
        label: "Usuario",
        formControlName: "username",
        name: "username",
        placeholder: "Email",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "password",
        typeElement: "password",
        type: TypeElement.input,
        form: UrlProgram.GestionDeUsuarios, 
        label: "Contraseña",
        formControlName: "password",
        name: "password",
        placeholder: "Password",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "repeat_password",
        typeElement: "repeat_password",
        type: TypeElement.input,
        form: UrlProgram.GestionDeUsuarios, 
        label: "Confirmar contraseña",
        formControlName: "repeat_password",
        name: "repeat_password",
        placeholder: "Confirmar Password",
        validations: JSON.stringify( [{ required: true}]),
        disabled: false,
        class: "field col-12 md:col-3"
    },
    {
        input_id: "user_image",
        type: TypeElement.file,
        form: UrlProgram.GestionDeUsuarios, 
        label: "Foto del usuario",
        formControlName: "user_image",
        name: "image",
        placeholder: "Escoja Imagen",
        multiple: "multiple",
        accept: "image/*",
        maxFileSize: 5000000,   
        invalidFileSizeMessageSummary: "Tamaño de archivo excedido, ",	
        invalidFileSizeMessageDetail: "El tamaño del archivo no puede ser mayor a {0}.",	
        invalidFileTypeMessageSummary: "Tipo de archivo incorrecto",
        invalidFileTypeMessageDetail: "tipo de archivo permitido es {0}.",
        invalidFileLimitMessageSummary: "Cantitidad maxima de archivos superada",
        invalidFileLimitMessageDetail: "el número máximo de archivos es {0}.",	
        showUploadButton: false,
        validations: JSON.stringify( [{ required: false}]), 
        disabled: false,
        class: "col-12",
        cancelLabel: "Cancelar",
    }
]