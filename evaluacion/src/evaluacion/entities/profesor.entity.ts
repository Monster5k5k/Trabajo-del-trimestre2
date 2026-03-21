import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ExamenTeorico } from './examen-teorico.entity';
import { Disena } from './disena.entity';

@Entity('profesor')
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  nif: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido1: string;

  @Column({ type: 'varchar', length: 100 })
  apellido2: string;

  @OneToMany(() => ExamenTeorico, examen => examen.profesor)
  examenes: ExamenTeorico[];

  @OneToMany(() => Disena, disena => disena.profesor)
  disenos: Disena[];
}
