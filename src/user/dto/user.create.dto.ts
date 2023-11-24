import { UserEntity } from '../user.entity'
import { PickType } from '@nestjs/swagger/dist'

export class UserCreateDto extends PickType(UserEntity, [
  'name',
  'email',
  'password',
  'organizationId',
  'role',
  'avatarUrl',
]) {}
