export declare class CrearAlumnoDto {
    nif: string;
    grupo: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
}
export declare class CrearPracticaDto {
    titulo: string;
    dificultad: string;
}
export declare class CrearProfesorDto {
    nif: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
}
export declare class CrearExamenTeoricoDto {
    titulo: string;
    numero_preguntas: number;
    fecha: Date | string;
    id_profesor: number;
}
export declare class CrearRealizaDto {
    id_alumno: number;
    id_practica: number;
    fecha: Date | string;
    nota: number;
}
export declare class CrearHaceDto {
    id_alumno: number;
    id_examen_teorico: number;
    nota: number;
}
export declare class CrearDisenaDto {
    id_profesor: number;
    id_practica: number;
    fecha: Date | string;
}
