import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt'; 
 import { APP_GUARD } from '@nestjs/core'; 
 import { AuthGuard } from 'src/auth/auth.guard'; 
  
 @Module({ 
   imports: [ 
     UserModule, 
     JwtModule.register({ 
       secret: 'secret', 
       signOptions: { expiresIn: '3m' }, 
     }), 
   ], 
   controllers: [AuthController], 
   providers: [ 
     AuthService, 
     { 
       provide: APP_GUARD, 
       useClass: AuthGuard, 
     }, 
   ], 
 }) 
 export class AuthModule {}
