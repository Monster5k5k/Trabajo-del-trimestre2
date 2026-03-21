import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { Practica } from './entities/practica.entity';
import { CrearAlumnoDto, CrearPracticaDto } from './evaluacion.dto';
export declare class EvaluacionService {
    private alumnoRepo;
    private practicaRepo;
    constructor(alumnoRepo: Repository<Alumno>, practicaRepo: Repository<Practica>);
    crearAlumno(dto: CrearAlumnoDto): Promise<Alumno>;
    obtenerAlumnos(): Promise<Alumno[]>;
    crearPractica(dto: CrearPracticaDto): Promise<Practica>;
    obtenerPracticas(): Promise<Practica[]>;
}
