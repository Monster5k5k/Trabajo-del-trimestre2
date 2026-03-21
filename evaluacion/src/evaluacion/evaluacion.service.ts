import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { Practica } from './entities/practica.entity';
import { CrearAlumnoDto, CrearPracticaDto } from './evaluacion.dto';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Alumno) private alumnoRepo: Repository<Alumno>,
    @InjectRepository(Practica) private practicaRepo: Repository<Practica>,
  ) {}

  async crearAlumno(dto: CrearAlumnoDto) {
    const nuevo = this.alumnoRepo.create(dto);
    return this.alumnoRepo.save(nuevo);
  }

  async obtenerAlumnos() {
    return this.alumnoRepo.find({ relations: ['practicasRealizadas', 'examenesHechos'] });
  }

  async crearPractica(dto: CrearPracticaDto) {
    const nueva = this.practicaRepo.create(dto);
    return this.practicaRepo.save(nueva);
  }

  async obtenerPracticas() {
    return this.practicaRepo.find();
  }
}
