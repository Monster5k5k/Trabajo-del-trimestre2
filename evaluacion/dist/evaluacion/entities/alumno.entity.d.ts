import { Realiza } from './realiza.entity';
import { Hace } from './hace.entity';
export declare class Alumno {
    id: number;
    nif: string;
    grupo: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    practicasRealizadas: Realiza[];
    examenesHechos: Hace[];
}
