import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Realiza } from './realiza.entity';
import { Disena } from './disena.entity';

@Entity('practica')
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'varchar', length: 50 })
  dificultad: string;

  @OneToMany(() => Realiza, realiza => realiza.practica)
  realizaciones: Realiza[];

  @OneToMany(() => Disena, disena => disena.practica)
  disenos: Disena[];
}
