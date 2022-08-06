import { applyDecorators } from "@nestjs/common";
import { IsDecimal, IsInt, IsNumber, IsPositive, Min } from "class-validator";

interface isGlobalNumber{
    min?:number
    isDecimal?:boolean
    isInteger?:boolean
}

export function IsGlobalNumber(params?: isGlobalNumber) {    
    return applyDecorators(
        IsPositive(),
        Min(params?.min || 1),
        IsNumber(),
        params?.isInteger ? IsInt() : () => true,
        params?.isDecimal ? IsDecimal() : () => true,
    );
  }