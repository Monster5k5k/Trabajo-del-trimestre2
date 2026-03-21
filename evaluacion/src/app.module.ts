import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvaluacionModule } from './evaluacion/evaluacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Usuario por defecto de XAMPP
      password: '',     // Contraseña por defecto de XAMPP (suele estar vacía)
      database: 'evaluacion_db', // Deberás crear esta bd en phpMyAdmin
      autoLoadEntities: true,
      synchronize: true, // Crea las tablas y relaciones de forma automática
    }),
    EvaluacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
