import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'New Task', description: 'The title of the task' })
  title: string;

  @ApiProperty({
    example: 'This is a task description.',
    description: 'The description of the task',
  })
  description: string;
}

export class UpdateTaskDto {
  @ApiProperty({
    example: 'Updated Task Title',
    description: 'The title of the task',
  })
  title: string;

  @ApiProperty({
    example: 'This is an updated task description.',
    description: 'The description of the task',
  })
  description: string;

  @ApiProperty({ example: true, description: 'Task completion status' })
  isCompleted: boolean;
}
