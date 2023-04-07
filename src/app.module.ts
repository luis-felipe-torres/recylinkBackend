import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcaModule } from './marca/marca.module';
import { ModeloModule } from './modelo/modelo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ltorres661:Luisfelipe16@recylinkbbdd.74dqe7a.mongodb.net/?retryWrites=true&w=majority',
    ),
    MarcaModule,
    ModeloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
