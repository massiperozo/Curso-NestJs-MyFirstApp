import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get() // Obtiene todas las tareas
  getAllTasks(@Query() query: any): any[] {
    //Query para obtener parametros por url
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id') // Obtiene una tarea en específico
  getTask(@Param('id') params: string): any {
    //Con el decorador Param obtengo los parametros de la url
    //Query para obtener parametros por url
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.tasksService.getTask(parseInt(params));
    // El comentario de arriba es para desactivar la regla de eslint que me marca error por no validar el tipo de dato que retorna la funcion
  }

  @Post() // Crea una nueva tarea
  createTask(@Body() taks: any[]): any[] {
    //Body para obtener el cuerpo de la peticion
    return this.tasksService.createTask(taks);
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
