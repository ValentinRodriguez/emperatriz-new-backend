import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/common/entity/entity';
import { Repository } from 'typeorm';
import { CreateMovementDTO } from './dto/create-movement.input';
import { UpdateMovementInput } from './dto/update-movement.input';
import { MovementEntity } from './entities/movement.entity';

@Injectable()
export class MovementService {

  constructor(@InjectRepository(MovementEntity) private MovementRepository: Repository<MovementEntity>) { }

  create(createMovementInput: CreateMovementDTO) {
    const data = this.MovementRepository.create(createMovementInput);
    return this.MovementRepository.save(data);    
  }

  findAll() {
    return this.MovementRepository.find({
      where: {
        status: Status.Active
      }
    });
  }

  findOne(id: string) {
    // return this.MovementRepository.findOne(id, {
    //   where: {
    //     status: Status.Active
    //   }
    // });
  }

  SearchOneMovementByName(title_movement: string) {
    return this.MovementRepository.find({
      where: {
        status: Status.Active,
        title_movement: title_movement
      }
    });
  }

  update(id: string, updateMovementInput: UpdateMovementInput) {
    let data:MovementEntity = this.MovementRepository.create(updateMovementInput)
    data.id = id;
    return this.MovementRepository.save(data);
  }

  async remove(id: string) {
    try{
      let register = await this.findOne(id);      
      // if (register) {
      //   register.status = Status.Deactive;
      //   let data:MovementEntity = this.MovementRepository.create(register)
      //   return  await this.MovementRepository.save(data);
      // }
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }catch(error){   
      return error;  
    }
  }
}
