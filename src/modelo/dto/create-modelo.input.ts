import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateModeloInput {
  @Field()
  @IsString()
  @MaxLength(50)
  nombre: string;

  @Field()
  marca_id: string;

  @Field()
  @IsString()
  @MaxLength(255)
  url_imagen: string;

  @Field()
  @IsString()
  @MaxLength(255)
  descripcion: string;
}
