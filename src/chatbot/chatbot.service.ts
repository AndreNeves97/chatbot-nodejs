import { Injectable } from '@nestjs/common';
import { ChatbotPromptResponse } from './dto/chatbot-prompt.response';
import { ChatbotPromptRequest } from './dto/chatbot-prompt.request';
import { Observable, of } from 'rxjs';

@Injectable()
export class ChatbotService {
  prompt(
    chatbotPromptRequest: ChatbotPromptRequest,
  ): Observable<ChatbotPromptResponse> {
    const data = {
      response: `Answer for "${chatbotPromptRequest.content}"`,
    };

    return of(data);
  }
}
