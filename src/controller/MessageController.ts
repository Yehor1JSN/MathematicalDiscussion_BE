import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageService } from '../Service/MessageService';
import { CreateMessageDto } from "../dto/CreateMessageDto";
import { Response } from 'express';

@Controller('message')
export class MessageController {

  constructor(private readonly appService: MessageService) {}

  @Post()
  async createMessage(@Res() res: Response, @Body() createMessageDto: CreateMessageDto) {
    const model = await this.appService.createMessage(createMessageDto);
    const messages = await this.appService.getMessages();

    res.status(HttpStatus.OK).json(messages);
  }

  @Get()
  async getAllMessages(@Res() res: Response) {
    const messages = await this.appService.getMessages();

    res.status(HttpStatus.OK).json(messages);
  }

}
