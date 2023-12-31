import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SigninDto } from './dto/signin-dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
// export class AuthService {
  // constructor(
  //   private userService: UserService,
  //   private readonly jwtService: JwtService,
  // ) {}
  export class AuthService {
    private revokedTokens: string[] = [];
  
    constructor(
      private userService: UserService,
      private readonly jwtService: JwtService,
    ) {}

  async signIn(signinDto: SigninDto): Promise<any> {
    const { username, password } = signinDto;
    const user = await this.userService.findOne(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid username or password');
    }
    const { id, firstname } = user;

    const payload = { id, username: firstname };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: 'hello',
      expiresIn: '5m',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: 'hello-world',
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async register(createUserDto: CreateUserDto): Promise<Partial<UserEntity>> {
    const user = await this.userService.createUser(createUserDto);
    const { password, ...result } = user;
    return result;
  }

  async signOut(token: string): Promise<void> {
    this.revokeToken(token); // Revoke the token
    // Additional cleanup tasks or logic...
  }

  private revokeToken(token: string): void {
    this.revokedTokens.push(token); // Add the token to the revoked tokens list
  }

  isTokenRevoked(token: string): boolean {
    return this.revokedTokens.includes(token); // Check if the token is revoked
  }
}

