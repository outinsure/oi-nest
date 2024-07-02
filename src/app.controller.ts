import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('first')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('one')
  getHello(@Req() request: Request): string {
    return 'Hello';
  }
}
