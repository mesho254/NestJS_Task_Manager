import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty({
    example: 'uuid',
    description: 'The unique identifier of the task',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'New Task', description: 'The title of the task' })
  @Column()
  title: string;

  @ApiProperty({
    example: 'Task Description',
    description: 'The description of the task',
  })
  @Column()
  description: string;

  @ApiProperty({
    example: false,
    description: 'The completion status of the task',
  })
  @Column({ default: false })
  isCompleted: boolean;

  @ApiProperty({
    example: '2024-08-14T10:00:00Z',
    description: 'The creation date of the task',
  })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
