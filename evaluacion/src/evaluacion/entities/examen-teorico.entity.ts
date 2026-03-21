import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profesor } from './profesor.entity';
import { Hace } from './hace.entity';

@Entity('examen_teorico')
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'int' })
  numero_preguntas: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'int', nullable: true })
  id_profesor: number;

  @ManyToOne(() => Profesor, profesor => profesor.examenes)
  @JoinColumn({ name: 'id_profesor' })
  profesor: Profesor;

  @OneToMany(() => Hace, hace => hace.examen)
  relacionAlumnos: Hace[];
}
