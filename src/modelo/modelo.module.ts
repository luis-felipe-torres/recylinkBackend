import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloResolver } from './modelo.resolver';

@Module({
  providers: [ModeloResolver, ModeloService]
})
export class ModeloModule {}
