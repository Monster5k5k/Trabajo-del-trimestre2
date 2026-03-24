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
  CrearAlumnoDto, ActualizarAlumnoDto,
  CrearPracticaDto, ActualizarPracticaDto,
  CrearProfesorDto, ActualizarProfesorDto,
  CrearExamenTeoricoDto, ActualizarExamenTeoricoDto,
  CrearRealizaDto, ActualizarRealizaDto,
  CrearHaceDto, ActualizarHaceDto,
  CrearDisenaDto, ActualizarDisenaDto 
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

  // => Alumno
  async crearAlumno(dto: CrearAlumnoDto) {
    const nuevo = this.alumnoRepo.create(dto);
    return this.alumnoRepo.save(nuevo);
  }
  async obtenerAlumnos() { return this.alumnoRepo.find({ relations: ['practicasRealizadas', 'examenesHechos'] }); }
  async obtenerAlumnoPorId(id: number) { return this.alumnoRepo.findOne({ where: { id }, relations: ['practicasRealizadas', 'examenesHechos'] }); }
  async actualizarAlumno(id: number, dto: ActualizarAlumnoDto) { await this.alumnoRepo.update(id, dto); return this.obtenerAlumnoPorId(id); }
  async eliminarAlumno(id: number) { return this.alumnoRepo.delete(id); }

  // => Practica
  async crearPractica(dto: CrearPracticaDto) {
    const nueva = this.practicaRepo.create(dto);
    return this.practicaRepo.save(nueva);
  }
  async obtenerPracticas() { return this.practicaRepo.find(); }
  async obtenerPracticaPorId(id: number) { return this.practicaRepo.findOne({ where: { id } }); }
  async actualizarPractica(id: number, dto: ActualizarPracticaDto) { await this.practicaRepo.update(id, dto); return this.obtenerPracticaPorId(id); }
  async eliminarPractica(id: number) { return this.practicaRepo.delete(id); }

  // => Profesor
  async crearProfesor(dto: CrearProfesorDto) {
    const nuevo = this.profesorRepo.create(dto);
    return this.profesorRepo.save(nuevo);
  }
  async obtenerProfesores() { return this.profesorRepo.find({ relations: ['examenes', 'disenos'] }); }
  async obtenerProfesorPorId(id: number) { return this.profesorRepo.findOne({ where: { id }, relations: ['examenes', 'disenos'] }); }
  async actualizarProfesor(id: number, dto: ActualizarProfesorDto) { await this.profesorRepo.update(id, dto); return this.obtenerProfesorPorId(id); }
  async eliminarProfesor(id: number) { return this.profesorRepo.delete(id); }

  // => Examen Teorico
  async crearExamenTeorico(dto: CrearExamenTeoricoDto) {
    const nuevo = this.examenTeoricoRepo.create(dto);
    return this.examenTeoricoRepo.save(nuevo);
  }
  async obtenerExamenesTeoricos() { return this.examenTeoricoRepo.find({ relations: ['profesor', 'relacionAlumnos'] }); }
  async obtenerExamenTeoricoPorId(id: number) { return this.examenTeoricoRepo.findOne({ where: { id }, relations: ['profesor', 'relacionAlumnos'] }); }
  async actualizarExamenTeorico(id: number, dto: ActualizarExamenTeoricoDto) { await this.examenTeoricoRepo.update(id, dto); return this.obtenerExamenTeoricoPorId(id); }
  async eliminarExamenTeorico(id: number) { return this.examenTeoricoRepo.delete(id); }

  // => Realiza
  async crearRealiza(dto: CrearRealizaDto) {
    const nuevo = this.realizaRepo.create(dto);
    return this.realizaRepo.save(nuevo);
  }
  async obtenerRealizaciones() { return this.realizaRepo.find({ relations: ['alumno', 'practica'] }); }
  async obtenerRealizaPorIds(id_alumno: number, id_practica: number) { return this.realizaRepo.findOne({ where: { id_alumno, id_practica }, relations: ['alumno', 'practica'] }); }
  async actualizarRealiza(id_alumno: number, id_practica: number, dto: ActualizarRealizaDto) { await this.realizaRepo.update({ id_alumno, id_practica }, dto); return this.obtenerRealizaPorIds(id_alumno, id_practica); }
  async eliminarRealiza(id_alumno: number, id_practica: number) { return this.realizaRepo.delete({ id_alumno, id_practica }); }

  // => Hace
  async crearHace(dto: CrearHaceDto) {
    const nuevo = this.haceRepo.create(dto);
    return this.haceRepo.save(nuevo);
  }
  async obtenerHaces() { return this.haceRepo.find({ relations: ['alumno', 'examen'] }); }
  async obtenerHacePorIds(id_alumno: number, id_examen_teorico: number) { return this.haceRepo.findOne({ where: { id_alumno, id_examen_teorico }, relations: ['alumno', 'examen'] }); }
  async actualizarHace(id_alumno: number, id_examen_teorico: number, dto: ActualizarHaceDto) { await this.haceRepo.update({ id_alumno, id_examen_teorico }, dto); return this.obtenerHacePorIds(id_alumno, id_examen_teorico); }
  async eliminarHace(id_alumno: number, id_examen_teorico: number) { return this.haceRepo.delete({ id_alumno, id_examen_teorico }); }

  // => Disena
  async crearDisena(dto: CrearDisenaDto) {
    const nuevo = this.disenaRepo.create(dto);
    return this.disenaRepo.save(nuevo);
  }
  async obtenerDisenos() { return this.disenaRepo.find({ relations: ['profesor', 'practica'] }); }
  async obtenerDisenaPorIds(id_profesor: number, id_practica: number) { return this.disenaRepo.findOne({ where: { id_profesor, id_practica }, relations: ['profesor', 'practica'] }); }
  async actualizarDisena(id_profesor: number, id_practica: number, dto: ActualizarDisenaDto) { await this.disenaRepo.update({ id_profesor, id_practica }, dto); return this.obtenerDisenaPorIds(id_profesor, id_practica); }
  async eliminarDisena(id_profesor: number, id_practica: number) { return this.disenaRepo.delete({ id_profesor, id_practica }); }
}
