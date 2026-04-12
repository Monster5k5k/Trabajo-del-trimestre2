"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionController = void 0;
const common_1 = require("@nestjs/common");
const evaluacion_service_1 = require("./evaluacion.service");
const evaluacion_dto_1 = require("./evaluacion.dto");
let EvaluacionController = class EvaluacionController {
    service;
    constructor(service) {
        this.service = service;
    }
    crearAlumno(dto) { return this.service.crearAlumno(dto); }
    obtenerAlumnos() { return this.service.obtenerAlumnos(); }
    obtenerAlumnoPorId(id) { return this.service.obtenerAlumnoPorId(id); }
    actualizarAlumno(id, dto) { return this.service.actualizarAlumno(id, dto); }
    eliminarAlumno(id) { return this.service.eliminarAlumno(id); }
    crearPractica(dto) { return this.service.crearPractica(dto); }
    obtenerPracticas() { return this.service.obtenerPracticas(); }
    obtenerPracticaPorId(id) { return this.service.obtenerPracticaPorId(id); }
    actualizarPractica(id, dto) { return this.service.actualizarPractica(id, dto); }
    eliminarPractica(id) { return this.service.eliminarPractica(id); }
    crearProfesor(dto) { return this.service.crearProfesor(dto); }
    obtenerProfesores() { return this.service.obtenerProfesores(); }
    obtenerProfesorPorId(id) { return this.service.obtenerProfesorPorId(id); }
    actualizarProfesor(id, dto) { return this.service.actualizarProfesor(id, dto); }
    eliminarProfesor(id) { return this.service.eliminarProfesor(id); }
    crearExamenTeorico(dto) { return this.service.crearExamenTeorico(dto); }
    obtenerExamenesTeoricos() { return this.service.obtenerExamenesTeoricos(); }
    obtenerExamenTeoricoPorId(id) { return this.service.obtenerExamenTeoricoPorId(id); }
    actualizarExamenTeorico(id, dto) { return this.service.actualizarExamenTeorico(id, dto); }
    eliminarExamenTeorico(id) { return this.service.eliminarExamenTeorico(id); }
    crearRealiza(dto) { return this.service.crearRealiza(dto); }
    obtenerRealizaciones() { return this.service.obtenerRealizaciones(); }
    obtenerRealizaPorIds(id_alumno, id_practica) {
        return this.service.obtenerRealizaPorIds(id_alumno, id_practica);
    }
    actualizarRealiza(id_alumno, id_practica, dto) {
        return this.service.actualizarRealiza(id_alumno, id_practica, dto);
    }
    eliminarRealiza(id_alumno, id_practica) {
        return this.service.eliminarRealiza(id_alumno, id_practica);
    }
    crearHace(dto) { return this.service.crearHace(dto); }
    obtenerHaces() { return this.service.obtenerHaces(); }
    obtenerHacePorIds(id_alumno, id_examen_teorico) {
        return this.service.obtenerHacePorIds(id_alumno, id_examen_teorico);
    }
    actualizarHace(id_alumno, id_examen_teorico, dto) {
        return this.service.actualizarHace(id_alumno, id_examen_teorico, dto);
    }
    eliminarHace(id_alumno, id_examen_teorico) {
        return this.service.eliminarHace(id_alumno, id_examen_teorico);
    }
    crearDisena(dto) { return this.service.crearDisena(dto); }
    obtenerDisenos() { return this.service.obtenerDisenos(); }
    obtenerDisenaPorIds(id_profesor, id_practica) {
        return this.service.obtenerDisenaPorIds(id_profesor, id_practica);
    }
    actualizarDisena(id_profesor, id_practica, dto) {
        return this.service.actualizarDisena(id_profesor, id_practica, dto);
    }
    eliminarDisena(id_profesor, id_practica) {
        return this.service.eliminarDisena(id_profesor, id_practica);
    }
    obtenerBoletinNotasAlumno(id_alumno) {
        return this.service.obtenerBoletinNotasAlumno(id_alumno);
    }
    obtenerEstadisticasPractica(id_practica) {
        return this.service.obtenerEstadisticasPractica(id_practica);
    }
    obtenerAlumnosAprobadosExamen(id_examen) {
        return this.service.obtenerAlumnosAprobadosExamen(id_examen);
    }
    obtenerAlumnosSuspensosExamen(id_examen) {
        return this.service.obtenerAlumnosSuspensosExamen(id_examen);
    }
};
exports.EvaluacionController = EvaluacionController;
__decorate([
    (0, common_1.Post)('alumno'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearAlumnoDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearAlumno", null);
__decorate([
    (0, common_1.Get)('alumnos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerAlumnos", null);
__decorate([
    (0, common_1.Get)('alumno/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerAlumnoPorId", null);
__decorate([
    (0, common_1.Patch)('alumno/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, evaluacion_dto_1.ActualizarAlumnoDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarAlumno", null);
__decorate([
    (0, common_1.Delete)('alumno/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarAlumno", null);
__decorate([
    (0, common_1.Post)('practica'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearPracticaDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearPractica", null);
__decorate([
    (0, common_1.Get)('practicas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerPracticas", null);
__decorate([
    (0, common_1.Get)('practica/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerPracticaPorId", null);
__decorate([
    (0, common_1.Patch)('practica/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, evaluacion_dto_1.ActualizarPracticaDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarPractica", null);
__decorate([
    (0, common_1.Delete)('practica/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarPractica", null);
__decorate([
    (0, common_1.Post)('profesor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearProfesorDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearProfesor", null);
__decorate([
    (0, common_1.Get)('profesores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerProfesores", null);
__decorate([
    (0, common_1.Get)('profesor/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerProfesorPorId", null);
__decorate([
    (0, common_1.Patch)('profesor/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, evaluacion_dto_1.ActualizarProfesorDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarProfesor", null);
__decorate([
    (0, common_1.Delete)('profesor/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarProfesor", null);
__decorate([
    (0, common_1.Post)('examen_teorico'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearExamenTeoricoDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearExamenTeorico", null);
__decorate([
    (0, common_1.Get)('examenes_teoricos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerExamenesTeoricos", null);
__decorate([
    (0, common_1.Get)('examen_teorico/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerExamenTeoricoPorId", null);
__decorate([
    (0, common_1.Patch)('examen_teorico/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, evaluacion_dto_1.ActualizarExamenTeoricoDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarExamenTeorico", null);
__decorate([
    (0, common_1.Delete)('examen_teorico/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarExamenTeorico", null);
__decorate([
    (0, common_1.Post)('realiza'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearRealizaDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearRealiza", null);
__decorate([
    (0, common_1.Get)('realizaciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerRealizaciones", null);
__decorate([
    (0, common_1.Get)('realiza/:id_alumno/:id_practica'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerRealizaPorIds", null);
__decorate([
    (0, common_1.Patch)('realiza/:id_alumno/:id_practica'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, evaluacion_dto_1.ActualizarRealizaDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarRealiza", null);
__decorate([
    (0, common_1.Delete)('realiza/:id_alumno/:id_practica'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarRealiza", null);
__decorate([
    (0, common_1.Post)('hace'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearHaceDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearHace", null);
__decorate([
    (0, common_1.Get)('haces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerHaces", null);
__decorate([
    (0, common_1.Get)('hace/:id_alumno/:id_examen_teorico'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_examen_teorico', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerHacePorIds", null);
__decorate([
    (0, common_1.Patch)('hace/:id_alumno/:id_examen_teorico'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_examen_teorico', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, evaluacion_dto_1.ActualizarHaceDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarHace", null);
__decorate([
    (0, common_1.Delete)('hace/:id_alumno/:id_examen_teorico'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_examen_teorico', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarHace", null);
__decorate([
    (0, common_1.Post)('disena'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearDisenaDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "crearDisena", null);
__decorate([
    (0, common_1.Get)('disenos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerDisenos", null);
__decorate([
    (0, common_1.Get)('disena/:id_profesor/:id_practica'),
    __param(0, (0, common_1.Param)('id_profesor', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerDisenaPorIds", null);
__decorate([
    (0, common_1.Patch)('disena/:id_profesor/:id_practica'),
    __param(0, (0, common_1.Param)('id_profesor', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, evaluacion_dto_1.ActualizarDisenaDto]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "actualizarDisena", null);
__decorate([
    (0, common_1.Delete)('disena/:id_profesor/:id_practica'),
    __param(0, (0, common_1.Param)('id_profesor', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "eliminarDisena", null);
__decorate([
    (0, common_1.Get)('reporte/boletin/:id_alumno'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerBoletinNotasAlumno", null);
__decorate([
    (0, common_1.Get)('reporte/estadisticas-practica/:id_practica'),
    __param(0, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerEstadisticasPractica", null);
__decorate([
    (0, common_1.Get)('reporte/examen-aprobados/:id_examen'),
    __param(0, (0, common_1.Param)('id_examen', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerAlumnosAprobadosExamen", null);
__decorate([
    (0, common_1.Get)('reporte/examen-suspensos/:id_examen'),
    __param(0, (0, common_1.Param)('id_examen', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerAlumnosSuspensosExamen", null);
exports.EvaluacionController = EvaluacionController = __decorate([
    (0, common_1.Controller)('evaluacion'),
    __metadata("design:paramtypes", [evaluacion_service_1.EvaluacionService])
], EvaluacionController);
//# sourceMappingURL=evaluacion.controller.js.map