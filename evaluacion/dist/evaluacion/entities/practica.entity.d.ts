import { Realiza } from './realiza.entity';
import { Disena } from './disena.entity';
export declare class Practica {
    id: number;
    titulo: string;
    dificultad: string;
    realizaciones: Realiza[];
    disenos: Disena[];
}
