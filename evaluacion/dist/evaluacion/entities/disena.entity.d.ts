import { Profesor } from './profesor.entity';
import { Practica } from './practica.entity';
export declare class Disena {
    id_profesor: number;
    id_practica: number;
    fecha: Date;
    profesor: Profesor;
    practica: Practica;
}
