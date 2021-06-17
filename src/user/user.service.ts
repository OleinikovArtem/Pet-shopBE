import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

// DTO
import { CreateUserDto } from './dto/create-user.dto';
// import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  getAll() {
    return this.userRepository.findAll();
  }

  // getUser(dto: FindUserDto) {
  //   return this.userRepository.findOne<User>(dto);
  // }

  create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  // update() {
  //   return this.userRepository.findAll();
  // }
}
