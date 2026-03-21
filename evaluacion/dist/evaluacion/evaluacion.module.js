"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumno_entity_1 = require("./entities/alumno.entity");
const practica_entity_1 = require("./entities/practica.entity");
const profesor_entity_1 = require("./entities/profesor.entity");
const examen_teorico_entity_1 = require("./entities/examen-teorico.entity");
const realiza_entity_1 = require("./entities/realiza.entity");
const hace_entity_1 = require("./entities/hace.entity");
const disena_entity_1 = require("./entities/disena.entity");
const evaluacion_service_1 = require("./evaluacion.service");
const evaluacion_controller_1 = require("./evaluacion.controller");
let EvaluacionModule = class EvaluacionModule {
};
exports.EvaluacionModule = EvaluacionModule;
exports.EvaluacionModule = EvaluacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                alumno_entity_1.Alumno, practica_entity_1.Practica, profesor_entity_1.Profesor, examen_teorico_entity_1.ExamenTeorico, realiza_entity_1.Realiza, hace_entity_1.Hace, disena_entity_1.Disena
            ])
        ],
        providers: [evaluacion_service_1.EvaluacionService],
        controllers: [evaluacion_controller_1.EvaluacionController]
    })
], EvaluacionModule);
//# sourceMappingURL=evaluacion.module.js.map