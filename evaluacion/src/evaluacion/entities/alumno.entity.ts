import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Realiza } from './realiza.entity';
import { Hace } from './hace.entity';

@Entity('alumno')
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  nif: string;

  @Column({ type: 'varchar', length: 50 })
  grupo: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido1: string;

  @Column({ type: 'varchar', length: 100 })
  apellido2: string;

  @OneToMany(() => Realiza, realiza => realiza.alumno)
  practicasRealizadas: Realiza[];

  @OneToMany(() => Hace, hace => hace.alumno)
  examenesHechos: Hace[];
}
