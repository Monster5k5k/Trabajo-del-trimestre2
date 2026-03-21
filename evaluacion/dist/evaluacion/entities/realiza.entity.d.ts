import { Alumno } from './alumno.entity';
import { Practica } from './practica.entity';
export declare class Realiza {
    id_alumno: number;
    id_practica: number;
    fecha: Date;
    nota: number;
    alumno: Alumno;
    practica: Practica;
}
