import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Marca {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
