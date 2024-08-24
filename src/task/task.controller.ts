import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  @ApiBody({ type: CreateTaskDto })
  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(
      createTaskDto.title,
      createTaskDto.description,
    );
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Returns all tasks.' })
  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  @ApiOperation({ summary: 'Get task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the task with the specified ID.',
  })
  @ApiParam({ name: 'id', description: 'Task ID', example: '1' })
  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated.',
  })
  @ApiParam({ name: 'id', description: 'Task ID', example: '1' })
  @ApiBody({ type: UpdateTaskDto })
  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(
      id,
      updateTaskDto.title,
      updateTaskDto.description,
      updateTaskDto.isCompleted,
    );
  }

  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully deleted.',
  })
  @ApiParam({ name: 'id', description: 'Task ID', example: '1' })
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
