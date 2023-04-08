import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Marca extends Document {
  @Field(() => String)
  @Prop({ required: true })
  nombre: string;

  @Field(() => String)
  @Prop({ required: true })
  url_imagen: string;

  @Field(() => String)
  @Prop({ required: true })
  descripcion: string;
}

export const MarcaSchema = SchemaFactory.createForClass(Marca);
