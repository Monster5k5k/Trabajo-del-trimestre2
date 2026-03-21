import { Alumno } from './alumno.entity';
import { ExamenTeorico } from './examen-teorico.entity';
export declare class Hace {
    id_alumno: number;
    id_examen_teorico: number;
    nota: number;
    alumno: Alumno;
    examen: ExamenTeorico;
}
