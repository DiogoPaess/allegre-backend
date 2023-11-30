import { ClassEntity } from '../class.entity'
import { PickType } from '@nestjs/swagger/dist'

export class ClassCreateDto extends PickType(ClassEntity, [
  'name',
  'logoUrl',
]) {}
