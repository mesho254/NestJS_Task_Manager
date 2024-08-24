import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(title: string, description: string): Promise<Task> {
    const task = this.taskRepository.create({ title, description });
    return await this.taskRepository.save(task);
  }

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTaskById(id: string): Promise<Task> {
    return await this.taskRepository.findOneBy({ id });
  }

  async updateTask(
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
  ): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;
    return await this.taskRepository.save(task);
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
