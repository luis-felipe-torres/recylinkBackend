import { CreateModeloInput } from './create-modelo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModeloInput extends PartialType(CreateModeloInput) {
  @Field(() => Int)
  id: number;
}
