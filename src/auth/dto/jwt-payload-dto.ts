import { UserRole } from '@prisma/client'

export class JwtPayLoadDto {
  id: string
  organizationId?: string
  role: UserRole
}
