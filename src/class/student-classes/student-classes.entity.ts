import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist'
import { StudentClasses as StudentClassesModel } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsOptional, IsUUID } from 'class-validator'
import { StudentEntity } from 'src/student/student.entity'
import { ClassEntity } from '../class.entity'

export class StudentClassesEntity implements StudentClassesModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
    example: '9ce758d0-b677-4159-bab5-a6aebee91e08',
  })
  @IsUUID()
  id: string

  @ApiProperty({
    description: 'Student UUID',
  })
  @IsUUID()
  studentId: string

  @ApiProperty({
    description: 'Student UUID',
  })
  @IsUUID()
  classId: string

  @ApiPropertyOptional({
    description: 'StudentEntity Object',
    type: () => StudentEntity,
  })
  @IsOptional()
  @Type(() => StudentEntity)
  student?: StudentEntity

  @ApiPropertyOptional({
    description: 'StudentEntity Object',
    type: () => ClassEntity,
  })
  @IsOptional()
  @Type(() => ClassEntity)
  class?: ClassEntity
}
