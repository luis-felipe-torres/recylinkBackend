import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ModeloService } from './modelo.service';
import { Modelo } from './entities/modelo.entity';
import { CreateModeloInput } from './dto/create-modelo.input';
import { UpdateModeloInput } from './dto/update-modelo.input';

@Resolver(() => Modelo)
export class ModeloResolver {
  constructor(private readonly modeloService: ModeloService) {}

  @Mutation(() => Modelo)
  createModelo(
    @Args('createModeloInput') createModeloInput: CreateModeloInput,
  ) {
    return this.modeloService.create(createModeloInput);
  }

  @Query(() => [Modelo], { name: 'modelo' })
  findAll() {
    return this.modeloService.findAll();
  }

  @Query(() => Modelo, { name: 'modelo' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.modeloService.findOne(id);
  }

  @Mutation(() => Modelo)
  updateModelo(
    @Args('updateModeloInput') updateModeloInput: UpdateModeloInput,
  ) {
    return this.modeloService.update(updateModeloInput.id, updateModeloInput);
  }

  @Mutation(() => Modelo)
  removeModelo(@Args('id', { type: () => String }) id: string) {
    return this.modeloService.remove(id);
  }
}
