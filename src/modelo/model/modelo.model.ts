// modelos-de-marca.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Marca } from '../../marca/model/marca.model';

@Schema()
export class Modelo extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Marca' })
  marca_id: Marca;

  @Prop()
  url_imagen: string;

  @Prop()
  descripcion: string;
}

export const ModeloSchema = SchemaFactory.createForClass(Modelo);
