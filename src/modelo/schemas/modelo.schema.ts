import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Marca } from '../../marca/schemas/marca.schema';

@ObjectType()
@Schema()
export class Modelo extends Document {
  @Field(() => String)
  @Prop({ required: true })
  nombre: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Marca', required: true })
  marca: Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  url_imagen: string;

  @Field(() => String)
  @Prop({ required: true })
  descripcion: string;
}

export const ModeloSchema = SchemaFactory.createForClass(Modelo);
