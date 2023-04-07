import { Test, TestingModule } from '@nestjs/testing';
import { ModeloResolver } from './modelo.resolver';
import { ModeloService } from './modelo.service';

describe('ModeloResolver', () => {
  let resolver: ModeloResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModeloResolver, ModeloService],
    }).compile();

    resolver = module.get<ModeloResolver>(ModeloResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
