import { Roles } from './../../interfaces/user.interface';

export class UpdateUserDto {
  readonly id: string;
  readonly email?: string;
  readonly phone?: string;
  readonly password?: string;
  readonly newPassword?: string;
  readonly role?: Roles;
}
