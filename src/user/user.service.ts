// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UsersEntity } from './entities/user.entity';

// // This should be a real class/interface representing a user entity
// export type User = any;

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository( UsersEntity )
//     private readonly  UsersRepository<UsersEntity>,
//   ){}
//   }
//   private readonly user = [
//     {
//       userId: 1,
//       username: 'Rida',
//       password: 'IEC2023',
//     },
//     {
//       userId: 2,
//       username: 'Kiran',
//       password: 'IECcohort7',
//     },
//   ];

//   async findOne(username: string): Promise<User | undefined> {
//     return this.user.find(user => user.username === username);
//   }
// }

// function InjectRepository(UsersEntity: typeof UsersEntity): (target: typeof UsersService, propertyKey: undefined, parameterIndex: 0) => void {
//   throw new Error('Function not implemented.');
// }


// function findOne(username: any, string: any) {
//   throw new Error('Function not implemented.');
// }
import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { UserRepository } from './user.repository';

export type User = any;

@Injectable()
export class UserService {
  constructor(private readonly userRepository : UserRepository){}

    

  async findOne(username: string): Promise<UserEntity> {
    return this.userRepository.findUserDetailsByUsername( username );
  }
  
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  
  
}