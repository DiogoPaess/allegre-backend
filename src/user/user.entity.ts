import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist'
import { User as UserModel, UserRole } from '@prisma/client'
import { Type } from 'class-transformer'
import {
  IsString,
  IsUrl,
  IsOptional,
  IsUUID,
  IsEmail,
  IsEnum,
  Length,
} from 'class-validator'
import { OrganizationEntity } from 'src/organization/organization.entity'

export class UserEntity implements UserModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
    example: '9ce758d0-b677-4159-bab5-a6aebee91e08',
  })
  @IsUUID()
  id: string

  @ApiProperty({
    description: 'User full Name',
  })
  @IsString()
  name: string

  @ApiProperty({
    description: 'User email',
  })
  @IsEmail()
  email: string

  @ApiProperty({
    description: 'User Password',
  })
  @Length(6)
  password: string

  @ApiPropertyOptional({
    description: 'User profile photo URL',
  })
  @IsOptional()
  @IsUrl()
  avatarUrl: string

  @ApiProperty({
    description: 'User Role',
    enum: UserRole,
  })
  @IsEnum(UserRole, {})
  role: UserRole

  @ApiPropertyOptional({
    description: 'User Organization UUID',
  })
  @IsUUID()
  @IsOptional()
  organizationId: string

  @ApiPropertyOptional({
    description: 'User Organization Object',
    type: () => OrganizationEntity,
  })
  @Type(() => OrganizationEntity)
  @IsOptional()
  organization?: OrganizationEntity
}
