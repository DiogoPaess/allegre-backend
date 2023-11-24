import { OrganizationEntity } from '../organization.entity'
import { PickType } from '@nestjs/swagger/dist'

export class OrganizationCreateDto extends PickType(OrganizationEntity, [
  'name',
  'cnpj',
  'logoUrl',
  'phone',
]) {}
