import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist'
import { Class as ClassModel } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsString, IsOptional, IsUUID, IsUrl } from 'class-validator'
import { OrganizationEntity } from 'src/organization/organization.entity'

export class ClassEntity implements ClassModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
    example: '9ce758d0-b677-4159-bab5-a6aebee91e08',
  })
  @IsUUID()
  id: string

  @ApiProperty({
    description: 'Class name',
  })
  @IsString()
  name: string

  @ApiPropertyOptional({
    description: 'Class Logo URL',
  })
  @IsOptional()
  @IsUrl()
  logoUrl: string

  @ApiProperty({
    description: 'Class Organization UUID',
  })
  @IsUUID()
  organizationId: string

  @ApiPropertyOptional({
    description: 'Class Organization Object',
    type: () => OrganizationEntity,
  })
  @IsOptional()
  @Type(() => OrganizationEntity)
  organization?: OrganizationEntity
}
