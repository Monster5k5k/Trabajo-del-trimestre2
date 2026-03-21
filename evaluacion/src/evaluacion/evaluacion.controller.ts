import { Controller, Get, Post, Body } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { 
  CrearAlumnoDto, CrearPracticaDto, CrearProfesorDto, 
  CrearExamenTeoricoDto, CrearRealizaDto, CrearHaceDto, CrearDisenaDto 
} from './evaluacion.dto';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly service: EvaluacionService) {}

  @Post('alumno')
  async crearAlumno(@Body() dto: CrearAlumnoDto) {
    console.log('Datos recibidos en el POST:', dto);
    const resultado = await this.service.crearAlumno(dto);
    console.log('Resultado al guardar:', resultado);
    return resultado;
  }

  @Get('alumnos')
  obtenerAlumnos() {
    return this.service.obtenerAlumnos();
  }

  @Post('practica')
  async crearPractica(@Body() dto: CrearPracticaDto) {
    console.log('Datos de práctica recibidos en el POST:', dto);
    const resultado = await this.service.crearPractica(dto);
    console.log('Práctica guardada:', resultado);
    return resultado;
  }

  @Get('practicas')
  obtenerPracticas() {
    return this.service.obtenerPracticas();
  }

  @Post('profesor')
  async crearProfesor(@Body() dto: CrearProfesorDto) {
    console.log('Datos de profesor recibidos en el POST:', dto);
    const resultado = await this.service.crearProfesor(dto);
    console.log('Profesor guardado:', resultado);
    return resultado;
  }

  @Get('profesores')
  obtenerProfesores() {
    return this.service.obtenerProfesores();
  }

  @Post('examen_teorico')
  async crearExamenTeorico(@Body() dto: CrearExamenTeoricoDto) {
    console.log('Datos de examen teórico recibidos en el POST:', dto);
    const resultado = await this.service.crearExamenTeorico(dto);
    console.log('Examen teórico guardado:', resultado);
    return resultado;
  }

  @Get('examenes_teoricos')
  obtenerExamenesTeoricos() {
    return this.service.obtenerExamenesTeoricos();
  }

  @Post('realiza')
  async crearRealiza(@Body() dto: CrearRealizaDto) {
    console.log('Datos de realiza recibidos en el POST:', dto);
    const resultado = await this.service.crearRealiza(dto);
    console.log('Realiza guardado:', resultado);
    return resultado;
  }

  @Get('realizaciones')
  obtenerRealizaciones() {
    return this.service.obtenerRealizaciones();
  }

  @Post('hace')
  async crearHace(@Body() dto: CrearHaceDto) {
    console.log('Datos de hace recibidos en el POST:', dto);
    const resultado = await this.service.crearHace(dto);
    console.log('Hace guardado:', resultado);
    return resultado;
  }

  @Get('haces')
  obtenerHaces() {
    return this.service.obtenerHaces();
  }

  @Post('disena')
  async crearDisena(@Body() dto: CrearDisenaDto) {
    console.log('Datos de diseña recibidos en el POST:', dto);
    const resultado = await this.service.crearDisena(dto);
    console.log('Diseña guardado:', resultado);
    return resultado;
  }

  @Get('disenos')
  obtenerDisenos() {
    return this.service.obtenerDisenos();
  }
}
