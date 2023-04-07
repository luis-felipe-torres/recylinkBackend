import { Injectable } from '@nestjs/common';
import { CreateModeloInput } from './dto/create-modelo.input';
import { UpdateModeloInput } from './dto/update-modelo.input';

@Injectable()
export class ModeloService {
  create(createModeloInput: CreateModeloInput) {
    return 'This action adds a new modelo';
  }

  findAll() {
    return `This action returns all modelo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modelo`;
  }

  update(id: number, updateModeloInput: UpdateModeloInput) {
    return `This action updates a #${id} modelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelo`;
  }
}
