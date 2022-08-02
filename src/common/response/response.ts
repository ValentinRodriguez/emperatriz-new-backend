export class ResponseAPI{
    constructor(
        public status: number,
        public message: string,
        public data: any,
    ){}
}