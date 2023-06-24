// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './user/entities/user.entity';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserService } from './user/user.service';


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'syphilis786',
//       database: 'postgres',
//       entities: [UserEntity],
//       synchronize: true,
//     }),
//     AuthModule, UserModule
//   ],
//   controllers: [AppController],
//   providers: [AppService, UserService]
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { UserRepository } from './user/user.repository';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'syphilis786',
      database: 'postgres',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService, UserRepository, JwtService]
})
export class AppModule {}