import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotPromptResponse } from './dto/chatbot-prompt.response';
import { ChatbotPromptRequest } from './dto/chatbot-prompt.request';
import { Observable, switchMap, timer } from 'rxjs';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('prompt')
  findOne(
    @Body() body: ChatbotPromptRequest,
  ): Observable<ChatbotPromptResponse> {
    return timer(5000).pipe(switchMap(() => this.chatbotService.prompt(body)));
  }
}
