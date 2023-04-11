import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ModeloService } from './modelo.service';
import { MarcaService } from '../marca/marca.service';
import { Modelo } from './model/modelo.model';
import { Marca } from '../marca/model/marca.model';
import { CreateModeloInput } from './dto/create-modelo.input';
import { UpdateModeloInput } from './dto/update-modelo.input';

@Resolver(() => Modelo)
export class ModeloResolver {
  constructor(
    private readonly modeloService: ModeloService,
    private readonly marcaService: MarcaService,
  ) {}

  @Mutation(() => Modelo)
  createModelo(
    @Args('createModeloInput') createModeloInput: CreateModeloInput,
  ) {
    return this.modeloService.create(createModeloInput);
  }

  @Query(() => [Modelo], { name: 'modelos' })
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

  @ResolveField('marca', () => Marca)
  async marca(@Parent() modelo: Modelo): Promise<Marca> {
    return this.marcaService.findOne(modelo.marca.toString());
  }
}
