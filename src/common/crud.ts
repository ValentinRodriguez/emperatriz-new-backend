import { InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { PaginationDto } from "./dtos/pagination.dto";
import { Status } from "./entity/entity";
import { ResponseAPI } from "./response/response";

export class Crud{
    constructor(
       public anyRepository: Repository<any>
    ){}

    async findAll(paginationDto?:PaginationDto) {
        let data = null;

        try {
            if(!paginationDto){
                data = await this.anyRepository.find({
                  where: { status: Status.Active }
                });
            }else{
                const { limit = 10, offset = 0 } = paginationDto;
                data = await this.anyRepository.find({
                    take: limit,
                    skip: offset,
                    where: {
                        status: Status.Active
                    }
                })
            }
            return new ResponseAPI(200, "Success", data);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}