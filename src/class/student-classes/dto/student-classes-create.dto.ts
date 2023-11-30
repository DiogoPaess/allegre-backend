import { IsUUID } from 'class-validator'
import { StudentClassesEntity } from '../student-classes.entity'
import { ApiProperty, PickType } from '@nestjs/swagger/dist'

export class StudentClassesCreateDto extends PickType(StudentClassesEntity, [
  'classId',
]) {
  @ApiProperty({
    description: 'Students IDs Array',
  })
  @IsUUID(undefined, { each: true })
  studentIds: string[]
}
