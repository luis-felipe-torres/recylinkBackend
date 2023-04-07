// modelos-de-marca.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Modelo, ModeloSchema } from './model/modelo.model';
import { ModeloService } from './modelo.service';
import { ModeloResolver } from './modelo.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modelo.name, schema: ModeloSchema }]),
  ],
  providers: [ModeloService, ModeloResolver],
})
export class ModeloModule {}
