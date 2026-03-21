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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hace = void 0;
const typeorm_1 = require("typeorm");
const alumno_entity_1 = require("./alumno.entity");
const examen_teorico_entity_1 = require("./examen-teorico.entity");
let Hace = class Hace {
    id_alumno;
    id_examen_teorico;
    nota;
    alumno;
    examen;
};
exports.Hace = Hace;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Hace.prototype, "id_alumno", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Hace.prototype, "id_examen_teorico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Hace.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_entity_1.Alumno, alumno => alumno.examenesHechos),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", alumno_entity_1.Alumno)
], Hace.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => examen_teorico_entity_1.ExamenTeorico, examen => examen.relacionAlumnos),
    (0, typeorm_1.JoinColumn)({ name: 'id_examen_teorico' }),
    __metadata("design:type", examen_teorico_entity_1.ExamenTeorico)
], Hace.prototype, "examen", void 0);
exports.Hace = Hace = __decorate([
    (0, typeorm_1.Entity)('alumno_hace_examen_teorico')
], Hace);
//# sourceMappingURL=hace.entity.js.map