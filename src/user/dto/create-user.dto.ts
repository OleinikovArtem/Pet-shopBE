import { Roles } from './../../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@email.com', description: 'unique Email' })
  readonly email: string;
  @ApiProperty({ example: 380931234567, description: 'unique Phone number with country code' })
  readonly phone: string;
  @ApiProperty({ example: '12345678', description: 'password' })
  readonly password: string;
  @ApiProperty({ example: Roles.user, description: 'User role at CRM', required: false })
  readonly role?: Roles;
  @ApiProperty({ example: 'Nicolas', description: 'User name', required: false })
  readonly username?: string;
  @ApiProperty({
    example: 'https://i.picsum.photos/id/139/200/200.jpg?hmac=FNSPvHsHcRzKQtNxKKauJgIXpoaAufCwYvr-1w5T3R4',
    description: 'User avatar',
    required: false,
  })
  readonly avatar?: string;
}
