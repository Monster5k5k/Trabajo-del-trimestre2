import { EvaluacionService } from './evaluacion.service';
import { CrearAlumnoDto, CrearPracticaDto } from './evaluacion.dto';
export declare class EvaluacionController {
    private readonly service;
    constructor(service: EvaluacionService);
    crearAlumno(dto: CrearAlumnoDto): Promise<import("./entities/alumno.entity").Alumno>;
    obtenerAlumnos(): Promise<import("./entities/alumno.entity").Alumno[]>;
    crearPractica(dto: CrearPracticaDto): Promise<import("./entities/practica.entity").Practica>;
    obtenerPracticas(): Promise<import("./entities/practica.entity").Practica[]>;
}
