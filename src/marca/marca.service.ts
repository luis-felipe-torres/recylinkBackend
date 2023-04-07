// marca.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMarcaInput } from './dto/create-marca.input';
import { UpdateMarcaInput } from './dto/update-marca.input';
import { Marca, MarcaDocument } from './model/marca.model';

@Injectable()
export class MarcaService {
  constructor(
    @InjectModel(Marca.name) private marcaModel: Model<MarcaDocument>,
  ) {}

  async create(createMarcaInput: CreateMarcaInput): Promise<Marca> {
    const newMarca = new this.marcaModel(createMarcaInput);
    return newMarca.save();
  }

  async findAll(): Promise<Marca[]> {
    return this.marcaModel.find().exec();
  }

  async findOne(id: string): Promise<Marca> {
    return this.marcaModel.findById(id).exec();
  }

  async update(id: string, updateMarcaInput: UpdateMarcaInput): Promise<Marca> {
    return this.marcaModel
      .findByIdAndUpdate(id, updateMarcaInput, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Marca> {
    return this.marcaModel.findByIdAndDelete(id).exec();
  }
}
