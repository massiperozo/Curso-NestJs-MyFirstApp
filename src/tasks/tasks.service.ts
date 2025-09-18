import { Injectable, NotFoundException } from '@nestjs/common';

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

  getTask(id: number): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
    const taskEncontrada = this.task.find((task) => task.id === id);

    if (!taskEncontrada) {
      return new NotFoundException('Tarea no encontrada');
    } else {
      return taskEncontrada;
    }
  }

  createTask(task: any[]): any[] {
    console.log(task);
    // Crea una nueva tarea y la agrega al arreglo
    this.task.push({
      ...task,
      id: this.task.length + 1,
    });
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
