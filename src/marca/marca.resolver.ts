import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarcaService } from './marca.service';
import { Marca } from './entities/marca.entity';
import { CreateMarcaInput } from './dto/create-marca.input';
import { UpdateMarcaInput } from './dto/update-marca.input';

@Resolver(() => Marca)
export class MarcaResolver {
  constructor(private readonly marcaService: MarcaService) {}

  @Mutation(() => Marca)
  createMarca(@Args('createMarcaInput') createMarcaInput: CreateMarcaInput) {
    return this.marcaService.create(createMarcaInput);
  }

  @Query(() => [Marca], { name: 'marca' })
  findAll() {
    return this.marcaService.findAll();
  }

  @Query(() => Marca, { name: 'marca' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.marcaService.findOne(id);
  }

  @Mutation(() => Marca)
  updateMarca(@Args('updateMarcaInput') updateMarcaInput: UpdateMarcaInput) {
    return this.marcaService.update(updateMarcaInput.id, updateMarcaInput);
  }

  @Mutation(() => Marca)
  removeMarca(@Args('id', { type: () => Int }) id: number) {
    return this.marcaService.remove(id);
  }
}
