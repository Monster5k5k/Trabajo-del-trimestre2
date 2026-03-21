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
exports.Practica = void 0;
const typeorm_1 = require("typeorm");
const realiza_entity_1 = require("./realiza.entity");
const disena_entity_1 = require("./disena.entity");
let Practica = class Practica {
    id;
    titulo;
    dificultad;
    realizaciones;
    disenos;
};
exports.Practica = Practica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Practica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Practica.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Practica.prototype, "dificultad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => realiza_entity_1.Realiza, realiza => realiza.practica),
    __metadata("design:type", Array)
], Practica.prototype, "realizaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => disena_entity_1.Disena, disena => disena.practica),
    __metadata("design:type", Array)
], Practica.prototype, "disenos", void 0);
exports.Practica = Practica = __decorate([
    (0, typeorm_1.Entity)('practica')
], Practica);
//# sourceMappingURL=practica.entity.js.map