import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get() // Obtiene todas las tareas
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post() // Crea una nueva tarea
  createTask() {
    return this.tasksService.createTask();
  }

  @Put() // Actualiza una tarea por completo
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete() // Elimina una tarea
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch() // Actualiza una tarea parcialmente
  patchTask() {
    return this.tasksService.patchTask();
  }
}
