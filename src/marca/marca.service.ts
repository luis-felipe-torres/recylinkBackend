import { Injectable } from '@nestjs/common';
import { CreateMarcaInput } from './dto/create-marca.input';
import { UpdateMarcaInput } from './dto/update-marca.input';

@Injectable()
export class MarcaService {
  create(createMarcaInput: CreateMarcaInput) {
    return 'This action adds a new marca';
  }

  findAll() {
    return `This action returns all marca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marca`;
  }

  update(id: number, updateMarcaInput: UpdateMarcaInput) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
