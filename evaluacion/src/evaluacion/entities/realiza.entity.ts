import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Alumno } from './alumno.entity';
import { Practica } from './practica.entity';

@Entity('alumno_realiza_practica')
export class Realiza {
  @PrimaryColumn()
  id_alumno: number;

  @PrimaryColumn()
  id_practica: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'float' })
  nota: number;

  @ManyToOne(() => Alumno, alumno => alumno.practicasRealizadas)
  @JoinColumn({ name: 'id_alumno' })
  alumno: Alumno;

  @ManyToOne(() => Practica, practica => practica.realizaciones)
  @JoinColumn({ name: 'id_practica' })
  practica: Practica;
}
