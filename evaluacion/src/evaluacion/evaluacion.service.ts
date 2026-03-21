import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { Practica } from './entities/practica.entity';
import { Profesor } from './entities/profesor.entity';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { Realiza } from './entities/realiza.entity';
import { Hace } from './entities/hace.entity';
import { Disena } from './entities/disena.entity';
import { 
  CrearAlumnoDto, CrearPracticaDto, CrearProfesorDto, 
  CrearExamenTeoricoDto, CrearRealizaDto, CrearHaceDto, CrearDisenaDto 
} from './evaluacion.dto';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Alumno) private alumnoRepo: Repository<Alumno>,
    @InjectRepository(Practica) private practicaRepo: Repository<Practica>,
    @InjectRepository(Profesor) private profesorRepo: Repository<Profesor>,
    @InjectRepository(ExamenTeorico) private examenTeoricoRepo: Repository<ExamenTeorico>,
    @InjectRepository(Realiza) private realizaRepo: Repository<Realiza>,
    @InjectRepository(Hace) private haceRepo: Repository<Hace>,
    @InjectRepository(Disena) private disenaRepo: Repository<Disena>,
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

  async crearProfesor(dto: CrearProfesorDto) {
    const nuevo = this.profesorRepo.create(dto);
    return this.profesorRepo.save(nuevo);
  }

  async obtenerProfesores() {
    return this.profesorRepo.find({ relations: ['examenes', 'disenos'] });
  }

  async crearExamenTeorico(dto: CrearExamenTeoricoDto) {
    const nuevo = this.examenTeoricoRepo.create(dto);
    return this.examenTeoricoRepo.save(nuevo);
  }

  async obtenerExamenesTeoricos() {
    return this.examenTeoricoRepo.find({ relations: ['profesor', 'relacionAlumnos'] });
  }

  async crearRealiza(dto: CrearRealizaDto) {
    const nuevo = this.realizaRepo.create(dto);
    return this.realizaRepo.save(nuevo);
  }

  async obtenerRealizaciones() {
    return this.realizaRepo.find({ relations: ['alumno', 'practica'] });
  }

  async crearHace(dto: CrearHaceDto) {
    const nuevo = this.haceRepo.create(dto);
    return this.haceRepo.save(nuevo);
  }

  async obtenerHaces() {
    return this.haceRepo.find({ relations: ['alumno', 'examen'] });
  }

  async crearDisena(dto: CrearDisenaDto) {
    const nuevo = this.disenaRepo.create(dto);
    return this.disenaRepo.save(nuevo);
  }

  async obtenerDisenos() {
    return this.disenaRepo.find({ relations: ['profesor', 'practica'] });
  }
}
