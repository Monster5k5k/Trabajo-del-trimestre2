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
exports.EvaluacionController = EvaluacionController = __decorate([
    (0, common_1.Controller)('evaluacion'),
    __metadata("design:paramtypes", [evaluacion_service_1.EvaluacionService])
], EvaluacionController);
//# sourceMappingURL=evaluacion.controller.js.map