import { Like } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { BadRequestException, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { validate as isUUID } from 'uuid';
import { PaginationDto } from "./dtos/pagination.dto";
import { Status } from "./entity/entity";
import { ResponseAPI } from "./response/response";
import { Users } from "../endpoints/auth/entities/user.entity";
import { CreateBrandInput } from "src/endpoints/brand/dto/create-brand.input";
import { getDateTime } from "src/utils/date.utils";

export class Crud{

    private readonly logger = new Logger('CRUD');

    constructor(
       public anyRepository: Repository<any>,
       public relations?:string[]
    ){}

    async findAll(paginationDto?:PaginationDto) {
        let data = null;

        try {
            if(!paginationDto){
                data = await this.anyRepository.find({
                  relations: this.relations,
                  where: { status: Status.Active }
                });
            }else{
                const { limit = 10, offset = 0 } = paginationDto;
                data = await this.anyRepository.find({
                    take: limit,
                    skip: offset,
                    relations: this.relations,
                    where: {
                        status: Status.Active
                    }
                })
            }
            return new ResponseAPI(200, "Success", data);
        } catch (error) {
            this.handleDBExceptions(error);
        }
    }

    async findRegisters(term: string) {

        let data: any = [];
        
        if ( isUUID(term) ) {
            console.log(term);            
            data = await this.anyRepository.findOneBy({ id: term });
            // console.log(data);
            
        }else{
            data = await this.anyRepository.find({
                relations: this.relations,
                where: {
                    title: Like(`%${term}%`),
                    status: Status.Active
                }
            });            
        }

        if ( !data ) throw new NotFoundException(`Product with ${ term } not found`);

        return new ResponseAPI(200, "Success", data);
    }

    async createRegister(create: CreateBrandInput, user:Users) {        
        try {
            const dataCreate = this.anyRepository.create(create);
            dataCreate.created_by = user.id;

            const dataSave = await this.anyRepository.save(dataCreate);
            
            return new ResponseAPI( 200, "Success", dataSave );  
        } catch (error) {
            this.handleDBExceptions(error);
        }
    }

    async updateRegister(id:string, update:any, user:Users) {        
        try {
            const dataCreate:any = this.anyRepository.create(update)
            dataCreate.updated_at = getDateTime();
            dataCreate.updated_by = user.id;
            dataCreate.id = id;

            const dataSave = await this.anyRepository.save(dataCreate);

            return new ResponseAPI( 200, "Success", dataSave );
        } catch (error) {
            this.handleDBExceptions(error);
        }
    }

    async removeRegister(id: string, user:Users) {
        try{
          let register = await this.findRegisters(id); 

          if (register.data) {

            const dataCreate = this.anyRepository.create(register.data)
            dataCreate.deleted_at = getDateTime();
            dataCreate.deleted_by = user.id;
            dataCreate.status = Status.Deactive;

            const dataSave = await this.anyRepository.save(dataCreate);
             
            return new ResponseAPI(200, "Success", dataSave); 
          }

          throw new NotFoundException(`Record cannot find by id ${id}`)
        }catch(error){   
            this.handleDBExceptions(error); 
        }
    }

    private handleDBExceptions( error: any ) {
        if ( error.code === '23505' ) throw new BadRequestException(error.detail);
        
        this.logger.error(error);
        throw new InternalServerErrorException('Unexpected error, check server logs');    
    }
}