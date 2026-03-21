import { EvaluacionService } from './evaluacion.service';
import { CrearAlumnoDto, CrearPracticaDto, CrearProfesorDto, CrearExamenTeoricoDto, CrearRealizaDto, CrearHaceDto, CrearDisenaDto } from './evaluacion.dto';
export declare class EvaluacionController {
    private readonly service;
    constructor(service: EvaluacionService);
    crearAlumno(dto: CrearAlumnoDto): Promise<import("./entities/alumno.entity").Alumno>;
    obtenerAlumnos(): Promise<import("./entities/alumno.entity").Alumno[]>;
    crearPractica(dto: CrearPracticaDto): Promise<import("./entities/practica.entity").Practica>;
    obtenerPracticas(): Promise<import("./entities/practica.entity").Practica[]>;
    crearProfesor(dto: CrearProfesorDto): Promise<import("./entities/profesor.entity").Profesor>;
    obtenerProfesores(): Promise<import("./entities/profesor.entity").Profesor[]>;
    crearExamenTeorico(dto: CrearExamenTeoricoDto): Promise<import("./entities/examen-teorico.entity").ExamenTeorico>;
    obtenerExamenesTeoricos(): Promise<import("./entities/examen-teorico.entity").ExamenTeorico[]>;
    crearRealiza(dto: CrearRealizaDto): Promise<import("./entities/realiza.entity").Realiza>;
    obtenerRealizaciones(): Promise<import("./entities/realiza.entity").Realiza[]>;
    crearHace(dto: CrearHaceDto): Promise<import("./entities/hace.entity").Hace>;
    obtenerHaces(): Promise<import("./entities/hace.entity").Hace[]>;
    crearDisena(dto: CrearDisenaDto): Promise<import("./entities/disena.entity").Disena>;
    obtenerDisenos(): Promise<import("./entities/disena.entity").Disena[]>;
}
