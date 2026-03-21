import { Controller, Get, Post, Body } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CrearAlumnoDto, CrearPracticaDto } from './evaluacion.dto';

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
}
