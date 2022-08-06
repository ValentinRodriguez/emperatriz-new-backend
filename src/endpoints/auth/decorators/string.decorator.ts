import { IsString, MinLength } from "class-validator";
import { applyDecorators } from "@nestjs/common";
import { IsHTMLFree } from "@nestjsi/class-validator/is/is-html-free";

interface isGlobalString{
    minLength?:number
}

export function IsGlobalString(params?: isGlobalString) {    
    return applyDecorators(
        IsString(),
        // IsHTMLFree(),
        MinLength(params?.minLength || 1),
    );
  }