import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateModeloInput } from './dto/create-modelo.input';
import { UpdateModeloInput } from './dto/update-modelo.input';
import { Modelo, ModeloDocument } from './model/modelo.model';

@Injectable()
export class ModeloService {
  constructor(
    @InjectModel(Modelo.name)
    private modeloModel: Model<ModeloDocument>,
  ) {}

  async create(createModeloInput: CreateModeloInput): Promise<Modelo> {
    const newModelo = new this.modeloModel(createModeloInput);
    return newModelo.save();
  }

  async findAll(): Promise<Modelo[]> {
    return this.modeloModel.find().exec();
  }

  async findOne(id: string): Promise<Modelo> {
    return this.modeloModel.findById(id).exec();
  }

  async update(
    id: string,
    updateModelosDeMarcaInput: UpdateModeloInput,
  ): Promise<Modelo> {
    return this.modeloModel
      .findByIdAndUpdate(id, updateModelosDeMarcaInput, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Modelo> {
    return this.modeloModel.findByIdAndDelete(id).exec();
  }
}
