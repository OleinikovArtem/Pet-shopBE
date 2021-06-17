import { Roles } from './../interfaces/user.interface';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttr {
  email: string;
  password: string;
  phone: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: 1, description: 'unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'test@email.com', description: 'unique Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 380931234567, description: 'unique Phone number with country code' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: Roles.user, description: 'User role at CRM' })
  @Column({
    type: DataType.ENUM(Roles.user, Roles.admin),
    allowNull: false,
    defaultValue: Roles.user,
  })
  role: string;

  @ApiProperty({ example: 'Nicolas', description: 'User name' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  username: string;

  @ApiProperty({
    example: 'https://i.picsum.photos/id/139/200/200.jpg?hmac=FNSPvHsHcRzKQtNxKKauJgIXpoaAufCwYvr-1w5T3R4',
    description: 'User avatar',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatar: string;

  @ApiProperty({ example: true, description: 'Is user online?' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isOnline: boolean;

  // @Column({
  //   type: DataType.DATE,
  //   allowNull: false,
  // })
  // createdAt: Date;

  // @Column({
  //   type: DataType.DATE,
  //   allowNull: false,
  //   defaultValue: false,
  // })
  // updatedAt: Date;
}
