import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks(): string[] {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  createTask(): string {
    return 'Creando una tarea';
  }

  updateTask(): string {
    return 'Actualizando una tarea';
  }

  deleteTask(): string {
    return 'Eliminando una tarea';
  }

  patchTask(): string {
    return 'Modificando parcialmente una tarea';
  }
}
