import { Profesor } from './profesor.entity';
import { Hace } from './hace.entity';
export declare class ExamenTeorico {
    id: number;
    titulo: string;
    numero_preguntas: number;
    fecha: Date;
    id_profesor: number;
    profesor: Profesor;
    relacionAlumnos: Hace[];
}
