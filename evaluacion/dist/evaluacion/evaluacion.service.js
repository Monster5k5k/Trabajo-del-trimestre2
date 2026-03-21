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
const profesor_entity_1 = require("./entities/profesor.entity");
const examen_teorico_entity_1 = require("./entities/examen-teorico.entity");
const realiza_entity_1 = require("./entities/realiza.entity");
const hace_entity_1 = require("./entities/hace.entity");
const disena_entity_1 = require("./entities/disena.entity");
let EvaluacionService = class EvaluacionService {
    alumnoRepo;
    practicaRepo;
    profesorRepo;
    examenTeoricoRepo;
    realizaRepo;
    haceRepo;
    disenaRepo;
    constructor(alumnoRepo, practicaRepo, profesorRepo, examenTeoricoRepo, realizaRepo, haceRepo, disenaRepo) {
        this.alumnoRepo = alumnoRepo;
        this.practicaRepo = practicaRepo;
        this.profesorRepo = profesorRepo;
        this.examenTeoricoRepo = examenTeoricoRepo;
        this.realizaRepo = realizaRepo;
        this.haceRepo = haceRepo;
        this.disenaRepo = disenaRepo;
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
    async crearProfesor(dto) {
        const nuevo = this.profesorRepo.create(dto);
        return this.profesorRepo.save(nuevo);
    }
    async obtenerProfesores() {
        return this.profesorRepo.find({ relations: ['examenes', 'disenos'] });
    }
    async crearExamenTeorico(dto) {
        const nuevo = this.examenTeoricoRepo.create(dto);
        return this.examenTeoricoRepo.save(nuevo);
    }
    async obtenerExamenesTeoricos() {
        return this.examenTeoricoRepo.find({ relations: ['profesor', 'relacionAlumnos'] });
    }
    async crearRealiza(dto) {
        const nuevo = this.realizaRepo.create(dto);
        return this.realizaRepo.save(nuevo);
    }
    async obtenerRealizaciones() {
        return this.realizaRepo.find({ relations: ['alumno', 'practica'] });
    }
    async crearHace(dto) {
        const nuevo = this.haceRepo.create(dto);
        return this.haceRepo.save(nuevo);
    }
    async obtenerHaces() {
        return this.haceRepo.find({ relations: ['alumno', 'examen'] });
    }
    async crearDisena(dto) {
        const nuevo = this.disenaRepo.create(dto);
        return this.disenaRepo.save(nuevo);
    }
    async obtenerDisenos() {
        return this.disenaRepo.find({ relations: ['profesor', 'practica'] });
    }
};
exports.EvaluacionService = EvaluacionService;
exports.EvaluacionService = EvaluacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_entity_1.Alumno)),
    __param(1, (0, typeorm_1.InjectRepository)(practica_entity_1.Practica)),
    __param(2, (0, typeorm_1.InjectRepository)(profesor_entity_1.Profesor)),
    __param(3, (0, typeorm_1.InjectRepository)(examen_teorico_entity_1.ExamenTeorico)),
    __param(4, (0, typeorm_1.InjectRepository)(realiza_entity_1.Realiza)),
    __param(5, (0, typeorm_1.InjectRepository)(hace_entity_1.Hace)),
    __param(6, (0, typeorm_1.InjectRepository)(disena_entity_1.Disena)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EvaluacionService);
//# sourceMappingURL=evaluacion.service.js.map