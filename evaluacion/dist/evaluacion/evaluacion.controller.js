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
    async crearAlumno(dto) {
        console.log('Datos recibidos en el POST:', dto);
        const resultado = await this.service.crearAlumno(dto);
        console.log('Resultado al guardar:', resultado);
        return resultado;
    }
    obtenerAlumnos() {
        return this.service.obtenerAlumnos();
    }
    async crearPractica(dto) {
        console.log('Datos de práctica recibidos en el POST:', dto);
        const resultado = await this.service.crearPractica(dto);
        console.log('Práctica guardada:', resultado);
        return resultado;
    }
    obtenerPracticas() {
        return this.service.obtenerPracticas();
    }
    async crearProfesor(dto) {
        console.log('Datos de profesor recibidos en el POST:', dto);
        const resultado = await this.service.crearProfesor(dto);
        console.log('Profesor guardado:', resultado);
        return resultado;
    }
    obtenerProfesores() {
        return this.service.obtenerProfesores();
    }
    async crearExamenTeorico(dto) {
        console.log('Datos de examen teórico recibidos en el POST:', dto);
        const resultado = await this.service.crearExamenTeorico(dto);
        console.log('Examen teórico guardado:', resultado);
        return resultado;
    }
    obtenerExamenesTeoricos() {
        return this.service.obtenerExamenesTeoricos();
    }
    async crearRealiza(dto) {
        console.log('Datos de realiza recibidos en el POST:', dto);
        const resultado = await this.service.crearRealiza(dto);
        console.log('Realiza guardado:', resultado);
        return resultado;
    }
    obtenerRealizaciones() {
        return this.service.obtenerRealizaciones();
    }
    async crearHace(dto) {
        console.log('Datos de hace recibidos en el POST:', dto);
        const resultado = await this.service.crearHace(dto);
        console.log('Hace guardado:', resultado);
        return resultado;
    }
    obtenerHaces() {
        return this.service.obtenerHaces();
    }
    async crearDisena(dto) {
        console.log('Datos de diseña recibidos en el POST:', dto);
        const resultado = await this.service.crearDisena(dto);
        console.log('Diseña guardado:', resultado);
        return resultado;
    }
    obtenerDisenos() {
        return this.service.obtenerDisenos();
    }
};
exports.EvaluacionController = EvaluacionController;
__decorate([
    (0, common_1.Post)('alumno'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearAlumnoDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearAlumno", null);
__decorate([
    (0, common_1.Get)('alumnos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerAlumnos", null);
__decorate([
    (0, common_1.Post)('practica'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearPracticaDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearPractica", null);
__decorate([
    (0, common_1.Get)('practicas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerPracticas", null);
__decorate([
    (0, common_1.Post)('profesor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearProfesorDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearProfesor", null);
__decorate([
    (0, common_1.Get)('profesores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerProfesores", null);
__decorate([
    (0, common_1.Post)('examen_teorico'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearExamenTeoricoDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearExamenTeorico", null);
__decorate([
    (0, common_1.Get)('examenes_teoricos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerExamenesTeoricos", null);
__decorate([
    (0, common_1.Post)('realiza'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearRealizaDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearRealiza", null);
__decorate([
    (0, common_1.Get)('realizaciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerRealizaciones", null);
__decorate([
    (0, common_1.Post)('hace'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearHaceDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearHace", null);
__decorate([
    (0, common_1.Get)('haces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerHaces", null);
__decorate([
    (0, common_1.Post)('disena'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.CrearDisenaDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearDisena", null);
__decorate([
    (0, common_1.Get)('disenos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "obtenerDisenos", null);
exports.EvaluacionController = EvaluacionController = __decorate([
    (0, common_1.Controller)('evaluacion'),
    __metadata("design:paramtypes", [evaluacion_service_1.EvaluacionService])
], EvaluacionController);
//# sourceMappingURL=evaluacion.controller.js.map