import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Marca } from '../../marca/model/marca.model';

export type ModeloDocument = Modelo & Document;

@ObjectType()
@Schema()
export class Modelo extends Document {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  nombre: string;

  @Field(() => Marca)
  @Prop({ required: true, type: Types.ObjectId, ref: 'Marca' })
  marca: Marca;

  @Field()
  @Prop()
  url_imagen: string;

  @Field()
  @Prop()
  descripcion: string;
}

export const ModeloSchema = SchemaFactory.createForClass(Modelo);
