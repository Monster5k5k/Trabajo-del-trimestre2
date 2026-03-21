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
exports.Disena = void 0;
const typeorm_1 = require("typeorm");
const profesor_entity_1 = require("./profesor.entity");
const practica_entity_1 = require("./practica.entity");
let Disena = class Disena {
    id_profesor;
    id_practica;
    fecha;
    profesor;
    practica;
};
exports.Disena = Disena;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Disena.prototype, "id_profesor", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Disena.prototype, "id_practica", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Disena.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.Profesor, profesor => profesor.disenos),
    (0, typeorm_1.JoinColumn)({ name: 'id_profesor' }),
    __metadata("design:type", profesor_entity_1.Profesor)
], Disena.prototype, "profesor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => practica_entity_1.Practica, practica => practica.disenos),
    (0, typeorm_1.JoinColumn)({ name: 'id_practica' }),
    __metadata("design:type", practica_entity_1.Practica)
], Disena.prototype, "practica", void 0);
exports.Disena = Disena = __decorate([
    (0, typeorm_1.Entity)('profesor_disena_practica')
], Disena);
//# sourceMappingURL=disena.entity.js.map