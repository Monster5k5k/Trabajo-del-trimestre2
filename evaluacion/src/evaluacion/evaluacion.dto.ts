export class CrearAlumnoDto { nif: string; grupo: string; nombre: string; apellido1: string; apellido2: string; }
export class ActualizarAlumnoDto { nif?: string; grupo?: string; nombre?: string; apellido1?: string; apellido2?: string; }

export class CrearPracticaDto { titulo: string; dificultad: string; }
export class ActualizarPracticaDto { titulo?: string; dificultad?: string; }

export class CrearProfesorDto { nif: string; nombre: string; apellido1: string; apellido2: string; }
export class ActualizarProfesorDto { nif?: string; nombre?: string; apellido1?: string; apellido2?: string; }

export class CrearExamenTeoricoDto { titulo: string; numero_preguntas: number; fecha: Date | string; id_profesor: number; }
export class ActualizarExamenTeoricoDto { titulo?: string; numero_preguntas?: number; fecha?: Date | string; id_profesor?: number; }

export class CrearRealizaDto { id_alumno: number; id_practica: number; fecha: Date | string; nota: number; }
export class ActualizarRealizaDto { id_alumno?: number; id_practica?: number; fecha?: Date | string; nota?: number; }

export class CrearHaceDto { id_alumno: number; id_examen_teorico: number; nota: number; }
export class ActualizarHaceDto { id_alumno?: number; id_examen_teorico?: number; nota?: number; }

export class CrearDisenaDto { id_profesor: number; id_practica: number; fecha: Date | string; }
export class ActualizarDisenaDto { id_profesor?: number; id_practica?: number; fecha?: Date | string; }
