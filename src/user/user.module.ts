import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User])],
})
export class UserModule {}
