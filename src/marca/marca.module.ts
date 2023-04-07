import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaResolver } from './marca.resolver';

@Module({
  providers: [MarcaResolver, MarcaService]
})
export class MarcaModule {}
