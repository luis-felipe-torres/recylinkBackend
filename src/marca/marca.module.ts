import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Marca, MarcaSchema } from './model/marca.model';
import { MarcaService } from './marca.service';
import { MarcaResolver } from './marca.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Marca.name, schema: MarcaSchema }]),
  ],
  providers: [MarcaService, MarcaResolver],
})
export class MarcaModule {}
