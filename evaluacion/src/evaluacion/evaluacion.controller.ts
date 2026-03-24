import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { 
  CrearAlumnoDto, ActualizarAlumnoDto,
  CrearPracticaDto, ActualizarPracticaDto,
  CrearProfesorDto, ActualizarProfesorDto,
  CrearExamenTeoricoDto, ActualizarExamenTeoricoDto,
  CrearRealizaDto, ActualizarRealizaDto,
  CrearHaceDto, ActualizarHaceDto,
  CrearDisenaDto, ActualizarDisenaDto
} from './evaluacion.dto';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly service: EvaluacionService) {}

  // ================= ALUMNO =================
  @Post('alumno')
  crearAlumno(@Body() dto: CrearAlumnoDto) { return this.service.crearAlumno(dto); }

  @Get('alumnos')
  obtenerAlumnos() { return this.service.obtenerAlumnos(); }

  @Get('alumno/:id')
  obtenerAlumnoPorId(@Param('id', ParseIntPipe) id: number) { return this.service.obtenerAlumnoPorId(id); }

  @Patch('alumno/:id')
  actualizarAlumno(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarAlumnoDto) { return this.service.actualizarAlumno(id, dto); }

  @Delete('alumno/:id')
  eliminarAlumno(@Param('id', ParseIntPipe) id: number) { return this.service.eliminarAlumno(id); }


  // ================= PRACTICA =================
  @Post('practica')
  crearPractica(@Body() dto: CrearPracticaDto) { return this.service.crearPractica(dto); }

  @Get('practicas')
  obtenerPracticas() { return this.service.obtenerPracticas(); }

  @Get('practica/:id')
  obtenerPracticaPorId(@Param('id', ParseIntPipe) id: number) { return this.service.obtenerPracticaPorId(id); }

  @Patch('practica/:id')
  actualizarPractica(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarPracticaDto) { return this.service.actualizarPractica(id, dto); }

  @Delete('practica/:id')
  eliminarPractica(@Param('id', ParseIntPipe) id: number) { return this.service.eliminarPractica(id); }


  // ================= PROFESOR =================
  @Post('profesor')
  crearProfesor(@Body() dto: CrearProfesorDto) { return this.service.crearProfesor(dto); }

  @Get('profesores')
  obtenerProfesores() { return this.service.obtenerProfesores(); }

  @Get('profesor/:id')
  obtenerProfesorPorId(@Param('id', ParseIntPipe) id: number) { return this.service.obtenerProfesorPorId(id); }

  @Patch('profesor/:id')
  actualizarProfesor(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarProfesorDto) { return this.service.actualizarProfesor(id, dto); }

  @Delete('profesor/:id')
  eliminarProfesor(@Param('id', ParseIntPipe) id: number) { return this.service.eliminarProfesor(id); }


  // ================= EXAMEN TEORICO =================
  @Post('examen_teorico')
  crearExamenTeorico(@Body() dto: CrearExamenTeoricoDto) { return this.service.crearExamenTeorico(dto); }

  @Get('examenes_teoricos')
  obtenerExamenesTeoricos() { return this.service.obtenerExamenesTeoricos(); }

  @Get('examen_teorico/:id')
  obtenerExamenTeoricoPorId(@Param('id', ParseIntPipe) id: number) { return this.service.obtenerExamenTeoricoPorId(id); }

  @Patch('examen_teorico/:id')
  actualizarExamenTeorico(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarExamenTeoricoDto) { return this.service.actualizarExamenTeorico(id, dto); }

  @Delete('examen_teorico/:id')
  eliminarExamenTeorico(@Param('id', ParseIntPipe) id: number) { return this.service.eliminarExamenTeorico(id); }


  // ================= REALIZA =================
  @Post('realiza')
  crearRealiza(@Body() dto: CrearRealizaDto) { return this.service.crearRealiza(dto); }

  @Get('realizaciones')
  obtenerRealizaciones() { return this.service.obtenerRealizaciones(); }

  @Get('realiza/:id_alumno/:id_practica')
  obtenerRealizaPorIds(@Param('id_alumno', ParseIntPipe) id_alumno: number, @Param('id_practica', ParseIntPipe) id_practica: number) {
    return this.service.obtenerRealizaPorIds(id_alumno, id_practica);
  }

  @Patch('realiza/:id_alumno/:id_practica')
  actualizarRealiza(@Param('id_alumno', ParseIntPipe) id_alumno: number, @Param('id_practica', ParseIntPipe) id_practica: number, @Body() dto: ActualizarRealizaDto) {
    return this.service.actualizarRealiza(id_alumno, id_practica, dto);
  }

  @Delete('realiza/:id_alumno/:id_practica')
  eliminarRealiza(@Param('id_alumno', ParseIntPipe) id_alumno: number, @Param('id_practica', ParseIntPipe) id_practica: number) {
    return this.service.eliminarRealiza(id_alumno, id_practica);
  }


  // ================= HACE =================
  @Post('hace')
  crearHace(@Body() dto: CrearHaceDto) { return this.service.crearHace(dto); }

  @Get('haces')
  obtenerHaces() { return this.service.obtenerHaces(); }

  @Get('hace/:id_alumno/:id_examen_teorico')
  obtenerHacePorIds(@Param('id_alumno', ParseIntPipe) id_alumno: number, @Param('id_examen_teorico', ParseIntPipe) id_examen_teorico: number) {
    return this.service.obtenerHacePorIds(id_alumno, id_examen_teorico);
  }

  @Patch('hace/:id_alumno/:id_examen_teorico')
  actualizarHace(@Param('id_alumno', ParseIntPipe) id_alumno: number, @Param('id_examen_teorico', ParseIntPipe) id_examen_teorico: number, @Body() dto: ActualizarHaceDto) {
    return this.service.actualizarHace(id_alumno, id_examen_teorico, dto);
  }

  @Delete('hace/:id_alumno/:id_examen_teorico')
  eliminarHace(@Param('id_alumno', ParseIntPipe) id_alumno: number, @Param('id_examen_teorico', ParseIntPipe) id_examen_teorico: number) {
    return this.service.eliminarHace(id_alumno, id_examen_teorico);
  }


  // ================= DISENA =================
  @Post('disena')
  crearDisena(@Body() dto: CrearDisenaDto) { return this.service.crearDisena(dto); }

  @Get('disenos')
  obtenerDisenos() { return this.service.obtenerDisenos(); }

  @Get('disena/:id_profesor/:id_practica')
  obtenerDisenaPorIds(@Param('id_profesor', ParseIntPipe) id_profesor: number, @Param('id_practica', ParseIntPipe) id_practica: number) {
    return this.service.obtenerDisenaPorIds(id_profesor, id_practica);
  }

  @Patch('disena/:id_profesor/:id_practica')
  actualizarDisena(@Param('id_profesor', ParseIntPipe) id_profesor: number, @Param('id_practica', ParseIntPipe) id_practica: number, @Body() dto: ActualizarDisenaDto) {
    return this.service.actualizarDisena(id_profesor, id_practica, dto);
  }

  @Delete('disena/:id_profesor/:id_practica')
  eliminarDisena(@Param('id_profesor', ParseIntPipe) id_profesor: number, @Param('id_practica', ParseIntPipe) id_practica: number) {
    return this.service.eliminarDisena(id_profesor, id_practica);
  }
}
