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
    async obtenerAlumnos() { return this.alumnoRepo.find({ relations: ['practicasRealizadas', 'examenesHechos'] }); }
    async obtenerAlumnoPorId(id) { return this.alumnoRepo.findOne({ where: { id }, relations: ['practicasRealizadas', 'examenesHechos'] }); }
    async actualizarAlumno(id, dto) { await this.alumnoRepo.update(id, dto); return this.obtenerAlumnoPorId(id); }
    async eliminarAlumno(id) { return this.alumnoRepo.delete(id); }
    async crearPractica(dto) {
        const nueva = this.practicaRepo.create(dto);
        return this.practicaRepo.save(nueva);
    }
    async obtenerPracticas() { return this.practicaRepo.find(); }
    async obtenerPracticaPorId(id) { return this.practicaRepo.findOne({ where: { id } }); }
    async actualizarPractica(id, dto) { await this.practicaRepo.update(id, dto); return this.obtenerPracticaPorId(id); }
    async eliminarPractica(id) { return this.practicaRepo.delete(id); }
    async crearProfesor(dto) {
        const nuevo = this.profesorRepo.create(dto);
        return this.profesorRepo.save(nuevo);
    }
    async obtenerProfesores() { return this.profesorRepo.find({ relations: ['examenes', 'disenos'] }); }
    async obtenerProfesorPorId(id) { return this.profesorRepo.findOne({ where: { id }, relations: ['examenes', 'disenos'] }); }
    async actualizarProfesor(id, dto) { await this.profesorRepo.update(id, dto); return this.obtenerProfesorPorId(id); }
    async eliminarProfesor(id) { return this.profesorRepo.delete(id); }
    async crearExamenTeorico(dto) {
        const nuevo = this.examenTeoricoRepo.create(dto);
        return this.examenTeoricoRepo.save(nuevo);
    }
    async obtenerExamenesTeoricos() { return this.examenTeoricoRepo.find({ relations: ['profesor', 'relacionAlumnos'] }); }
    async obtenerExamenTeoricoPorId(id) { return this.examenTeoricoRepo.findOne({ where: { id }, relations: ['profesor', 'relacionAlumnos'] }); }
    async actualizarExamenTeorico(id, dto) { await this.examenTeoricoRepo.update(id, dto); return this.obtenerExamenTeoricoPorId(id); }
    async eliminarExamenTeorico(id) { return this.examenTeoricoRepo.delete(id); }
    async crearRealiza(dto) {
        const nuevo = this.realizaRepo.create(dto);
        return this.realizaRepo.save(nuevo);
    }
    async obtenerRealizaciones() { return this.realizaRepo.find({ relations: ['alumno', 'practica'] }); }
    async obtenerRealizaPorIds(id_alumno, id_practica) { return this.realizaRepo.findOne({ where: { id_alumno, id_practica }, relations: ['alumno', 'practica'] }); }
    async actualizarRealiza(id_alumno, id_practica, dto) { await this.realizaRepo.update({ id_alumno, id_practica }, dto); return this.obtenerRealizaPorIds(id_alumno, id_practica); }
    async eliminarRealiza(id_alumno, id_practica) { return this.realizaRepo.delete({ id_alumno, id_practica }); }
    async crearHace(dto) {
        const nuevo = this.haceRepo.create(dto);
        return this.haceRepo.save(nuevo);
    }
    async obtenerHaces() { return this.haceRepo.find({ relations: ['alumno', 'examen'] }); }
    async obtenerHacePorIds(id_alumno, id_examen_teorico) { return this.haceRepo.findOne({ where: { id_alumno, id_examen_teorico }, relations: ['alumno', 'examen'] }); }
    async actualizarHace(id_alumno, id_examen_teorico, dto) { await this.haceRepo.update({ id_alumno, id_examen_teorico }, dto); return this.obtenerHacePorIds(id_alumno, id_examen_teorico); }
    async eliminarHace(id_alumno, id_examen_teorico) { return this.haceRepo.delete({ id_alumno, id_examen_teorico }); }
    async crearDisena(dto) {
        const nuevo = this.disenaRepo.create(dto);
        return this.disenaRepo.save(nuevo);
    }
    async obtenerDisenos() { return this.disenaRepo.find({ relations: ['profesor', 'practica'] }); }
    async obtenerDisenaPorIds(id_profesor, id_practica) { return this.disenaRepo.findOne({ where: { id_profesor, id_practica }, relations: ['profesor', 'practica'] }); }
    async actualizarDisena(id_profesor, id_practica, dto) { await this.disenaRepo.update({ id_profesor, id_practica }, dto); return this.obtenerDisenaPorIds(id_profesor, id_practica); }
    async eliminarDisena(id_profesor, id_practica) { return this.disenaRepo.delete({ id_profesor, id_practica }); }
    async obtenerBoletinNotasAlumno(id_alumno) {
        const alumno = await this.alumnoRepo.findOne({
            where: { id: id_alumno },
            relations: ['practicasRealizadas', 'practicasRealizadas.practica', 'examenesHechos', 'examenesHechos.examen'],
        });
        if (!alumno)
            return { mensaje: 'Alumno no encontrado' };
        const notasPracticas = alumno.practicasRealizadas.map(p => p.nota);
        const notasExamenes = alumno.examenesHechos.map(e => e.nota);
        const promedioPracticas = notasPracticas.length > 0 ? notasPracticas.reduce((a, b) => a + b, 0) / notasPracticas.length : 0;
        const promedioExamenes = notasExamenes.length > 0 ? notasExamenes.reduce((a, b) => a + b, 0) / notasExamenes.length : 0;
        const notaFinal = (promedioPracticas * 0.4) + (promedioExamenes * 0.6);
        return {
            alumno: `${alumno.nombre} ${alumno.apellido1} ${alumno.apellido2}`,
            grupo: alumno.grupo,
            promedioPracticas: Number(promedioPracticas.toFixed(2)),
            promedioExamenes: Number(promedioExamenes.toFixed(2)),
            notaFinal: Number(notaFinal.toFixed(2)),
            estado: notaFinal >= 5 ? 'Aprobado' : 'Suspenso',
            detallesPracticas: alumno.practicasRealizadas.map(p => ({ practica: p.practica?.titulo || `ID ${p.id_practica}`, nota: p.nota, fecha: p.fecha })),
            detallesExamenes: alumno.examenesHechos.map(e => ({ examen: e.examen?.titulo || `ID ${e.id_examen_teorico}`, nota: e.nota }))
        };
    }
    async obtenerEstadisticasPractica(id_practica) {
        const realizaciones = await this.realizaRepo.find({ where: { id_practica } });
        if (realizaciones.length === 0)
            return { mensaje: 'No hay datos o notas para esta práctica' };
        const notas = realizaciones.map(r => r.nota);
        const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
        const maxNota = Math.max(...notas);
        const minNota = Math.min(...notas);
        const aprobados = notas.filter(n => n >= 5).length;
        const suspensos = notas.filter(n => n < 5).length;
        return {
            id_practica,
            totalAlumnosEvaluados: notas.length,
            notaPromedio: Number(promedio.toFixed(2)),
            notaMaxima: maxNota,
            notaMinima: minNota,
            aprobados,
            suspensos,
            porcentajeAprobados: Number(((aprobados / notas.length) * 100).toFixed(2)) + '%'
        };
    }
    async obtenerAlumnosAprobadosExamen(id_examen_teorico) {
        const aprobados = await this.haceRepo.find({
            where: { id_examen_teorico: id_examen_teorico, nota: (0, typeorm_2.MoreThanOrEqual)(5) },
            relations: ['alumno']
        });
        return {
            id_examen: id_examen_teorico,
            totalAprobados: aprobados.length,
            alumnos: aprobados.map(a => ({
                id: a.alumno.id,
                nombre: `${a.alumno.nombre} ${a.alumno.apellido1}`,
                nota: a.nota
            }))
        };
    }
    async obtenerAlumnosSuspensosExamen(id_examen_teorico) {
        const suspensos = await this.haceRepo.find({
            where: { id_examen_teorico: id_examen_teorico, nota: (0, typeorm_2.LessThan)(5) },
            relations: ['alumno']
        });
        return {
            id_examen: id_examen_teorico,
            totalSuspensos: suspensos.length,
            alumnos: suspensos.map(a => ({
                id: a.alumno.id,
                nombre: `${a.alumno.nombre} ${a.alumno.apellido1}`,
                nota: a.nota
            }))
        };
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