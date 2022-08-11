import { IsString, MinLength } from "class-validator";
import { applyDecorators } from "@nestjs/common";
import { IsHTMLFree } from "@nestjsi/class-validator/is/is-html-free";

interface isGlobalString{
    minLength?:number
    each?:boolean
}

export function IsGlobalString(params?: isGlobalString) {    
    return applyDecorators(
        IsString({ each: params?.each  || false }),
        params?.minLength ? MinLength(params?.minLength || 1) : () => true,        
    );
  }