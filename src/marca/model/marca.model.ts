import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type MarcaDocument = Marca & Document;

@ObjectType()
@Schema()
export class Marca extends Document {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop()
  nombre: string;

  @Field()
  @Prop()
  url_imagen: string;

  @Field()
  @Prop()
  descripcion: string;
}

export const MarcaSchema = SchemaFactory.createForClass(Marca);
