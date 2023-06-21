import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin-dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard, Public } from 'src/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signinDto: SigninDto): Promise<any> {
    return this.authService.signIn(signinDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Promise<Partial<UserEntity>> {
    return this.authService.register(createUserDto);
  }

  @Get('profile')
  // @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }

}
