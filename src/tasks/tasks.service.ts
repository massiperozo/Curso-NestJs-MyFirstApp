import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TasksService {
  getTasks(): User {
    return {
      name: 'Tarea 1',
      description: 'Descripcion de la tarea 1',
      done: false,
    };
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
