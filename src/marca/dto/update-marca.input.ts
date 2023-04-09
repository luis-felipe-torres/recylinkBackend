import { InputType, PartialType, Field } from '@nestjs/graphql';
import { CreateMarcaInput } from './create-marca.input';

@InputType()
export class UpdateMarcaInput extends PartialType(CreateMarcaInput) {
  @Field(() => String)
  id: string;
}

/*REVISAR*/
