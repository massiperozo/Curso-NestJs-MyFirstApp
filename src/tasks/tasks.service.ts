import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TasksService {
  private task: any[] = []; // Arreglo para almacenar las tareas

  getTasks(): any[] {
    // Retorna todas las tareas
    return this.task;
  }

  createTask(task: any[]): any[] {
    console.log(task);
    // Crea una nueva tarea y la agrega al arreglo
    this.task.push(task);
    return this.task;
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
