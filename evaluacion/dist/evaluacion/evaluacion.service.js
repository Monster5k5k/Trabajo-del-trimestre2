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
exports.EvaluacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alumno_entity_1 = require("./entities/alumno.entity");
const practica_entity_1 = require("./entities/practica.entity");
let EvaluacionService = class EvaluacionService {
    alumnoRepo;
    practicaRepo;
    constructor(alumnoRepo, practicaRepo) {
        this.alumnoRepo = alumnoRepo;
        this.practicaRepo = practicaRepo;
    }
    async crearAlumno(dto) {
        const nuevo = this.alumnoRepo.create(dto);
        return this.alumnoRepo.save(nuevo);
    }
    async obtenerAlumnos() {
        return this.alumnoRepo.find({ relations: ['practicasRealizadas', 'examenesHechos'] });
    }
    async crearPractica(dto) {
        const nueva = this.practicaRepo.create(dto);
        return this.practicaRepo.save(nueva);
    }
    async obtenerPracticas() {
        return this.practicaRepo.find();
    }
};
exports.EvaluacionService = EvaluacionService;
exports.EvaluacionService = EvaluacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_entity_1.Alumno)),
    __param(1, (0, typeorm_1.InjectRepository)(practica_entity_1.Practica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EvaluacionService);
//# sourceMappingURL=evaluacion.service.js.map