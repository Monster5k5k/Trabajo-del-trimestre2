"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearDisenaDto = exports.CrearHaceDto = exports.CrearRealizaDto = exports.CrearExamenTeoricoDto = exports.CrearProfesorDto = exports.CrearPracticaDto = exports.CrearAlumnoDto = void 0;
class CrearAlumnoDto {
    nif;
    grupo;
    nombre;
    apellido1;
    apellido2;
}
exports.CrearAlumnoDto = CrearAlumnoDto;
class CrearPracticaDto {
    titulo;
    dificultad;
}
exports.CrearPracticaDto = CrearPracticaDto;
class CrearProfesorDto {
    nif;
    nombre;
    apellido1;
    apellido2;
}
exports.CrearProfesorDto = CrearProfesorDto;
class CrearExamenTeoricoDto {
    titulo;
    numero_preguntas;
    fecha;
    id_profesor;
}
exports.CrearExamenTeoricoDto = CrearExamenTeoricoDto;
class CrearRealizaDto {
    id_alumno;
    id_practica;
    fecha;
    nota;
}
exports.CrearRealizaDto = CrearRealizaDto;
class CrearHaceDto {
    id_alumno;
    id_examen_teorico;
    nota;
}
exports.CrearHaceDto = CrearHaceDto;
class CrearDisenaDto {
    id_profesor;
    id_practica;
    fecha;
}
exports.CrearDisenaDto = CrearDisenaDto;
//# sourceMappingURL=evaluacion.dto.js.map