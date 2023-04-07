import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateModeloInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
