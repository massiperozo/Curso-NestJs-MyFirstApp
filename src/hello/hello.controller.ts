import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HelloController {
  @Get('/')
  index() {
    return 'Hola Mundo desde NestJS';
  }
}
