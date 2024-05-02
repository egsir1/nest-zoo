import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(
    @Req() request: Request,
    @Res() response: Response,
    @Param() params: any,
    @Query('name') query: any,
  ): string {
    console.log('🚀 ~ DogController ~ query:', query);
    console.log('🚀 ~ DogController ~ params:', params);
    console.log('🚀 ~ DogController ~ introduce ~ request:', request.params);
    return this.dogService.introduce();
  }

  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.dogService.modifyDetail();
  }
}
