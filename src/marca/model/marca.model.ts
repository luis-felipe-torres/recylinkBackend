// marca.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MarcaDocument = Marca & Document;

@Schema()
export class Marca extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  url_imagen: string;

  @Prop()
  descripcion: string;
}

export const MarcaSchema = SchemaFactory.createForClass(Marca);
