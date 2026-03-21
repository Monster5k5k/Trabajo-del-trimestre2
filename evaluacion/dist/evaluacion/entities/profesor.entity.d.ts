import { ExamenTeorico } from './examen-teorico.entity';
import { Disena } from './disena.entity';
export declare class Profesor {
    id: number;
    nif: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    examenes: ExamenTeorico[];
    disenos: Disena[];
}
