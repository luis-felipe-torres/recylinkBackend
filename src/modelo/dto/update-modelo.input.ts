import { CreateModeloInput } from './create-modelo.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModeloInput extends PartialType(CreateModeloInput) {
  @Field(() => String)
  id: string;
}

/*REVISAR*/
