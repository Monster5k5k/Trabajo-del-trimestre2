import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Profesor } from './profesor.entity';
import { Practica } from './practica.entity';

@Entity('profesor_disena_practica')
export class Disena {
  @PrimaryColumn()
  id_profesor: number;

  @PrimaryColumn()
  id_practica: number;

  @Column({ type: 'date' })
  fecha: Date;

  @ManyToOne(() => Profesor, profesor => profesor.disenos)
  @JoinColumn({ name: 'id_profesor' })
  profesor: Profesor;

  @ManyToOne(() => Practica, practica => practica.disenos)
  @JoinColumn({ name: 'id_practica' })
  practica: Practica;
}
