"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualizarDisenaDto = exports.CrearDisenaDto = exports.ActualizarHaceDto = exports.CrearHaceDto = exports.ActualizarRealizaDto = exports.CrearRealizaDto = exports.ActualizarExamenTeoricoDto = exports.CrearExamenTeoricoDto = exports.ActualizarProfesorDto = exports.CrearProfesorDto = exports.ActualizarPracticaDto = exports.CrearPracticaDto = exports.ActualizarAlumnoDto = exports.CrearAlumnoDto = void 0;
class CrearAlumnoDto {
    nif;
    grupo;
    nombre;
    apellido1;
    apellido2;
}
exports.CrearAlumnoDto = CrearAlumnoDto;
class ActualizarAlumnoDto {
    nif;
    grupo;
    nombre;
    apellido1;
    apellido2;
}
exports.ActualizarAlumnoDto = ActualizarAlumnoDto;
class CrearPracticaDto {
    titulo;
    dificultad;
}
exports.CrearPracticaDto = CrearPracticaDto;
class ActualizarPracticaDto {
    titulo;
    dificultad;
}
exports.ActualizarPracticaDto = ActualizarPracticaDto;
class CrearProfesorDto {
    nif;
    nombre;
    apellido1;
    apellido2;
}
exports.CrearProfesorDto = CrearProfesorDto;
class ActualizarProfesorDto {
    nif;
    nombre;
    apellido1;
    apellido2;
}
exports.ActualizarProfesorDto = ActualizarProfesorDto;
class CrearExamenTeoricoDto {
    titulo;
    numero_preguntas;
    fecha;
    id_profesor;
}
exports.CrearExamenTeoricoDto = CrearExamenTeoricoDto;
class ActualizarExamenTeoricoDto {
    titulo;
    numero_preguntas;
    fecha;
    id_profesor;
}
exports.ActualizarExamenTeoricoDto = ActualizarExamenTeoricoDto;
class CrearRealizaDto {
    id_alumno;
    id_practica;
    fecha;
    nota;
}
exports.CrearRealizaDto = CrearRealizaDto;
class ActualizarRealizaDto {
    id_alumno;
    id_practica;
    fecha;
    nota;
}
exports.ActualizarRealizaDto = ActualizarRealizaDto;
class CrearHaceDto {
    id_alumno;
    id_examen_teorico;
    nota;
}
exports.CrearHaceDto = CrearHaceDto;
class ActualizarHaceDto {
    id_alumno;
    id_examen_teorico;
    nota;
}
exports.ActualizarHaceDto = ActualizarHaceDto;
class CrearDisenaDto {
    id_profesor;
    id_practica;
    fecha;
}
exports.CrearDisenaDto = CrearDisenaDto;
class ActualizarDisenaDto {
    id_profesor;
    id_practica;
    fecha;
}
exports.ActualizarDisenaDto = ActualizarDisenaDto;
//# sourceMappingURL=evaluacion.dto.js.map