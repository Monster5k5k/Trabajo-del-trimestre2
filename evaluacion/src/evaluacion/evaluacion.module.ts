import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Practica } from './entities/practica.entity';
import { Profesor } from './entities/profesor.entity';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { Realiza } from './entities/realiza.entity';
import { Hace } from './entities/hace.entity';
import { Disena } from './entities/disena.entity';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Alumno, Practica, Profesor, ExamenTeorico, Realiza, Hace, Disena
    ])
  ],
  providers: [EvaluacionService],
  controllers: [EvaluacionController]
})
export class EvaluacionModule {}
