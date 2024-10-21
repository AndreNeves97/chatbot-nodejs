import { Injectable } from '@nestjs/common';
import { ChatbotPromptResponse } from './dto/chatbot-prompt.response';
import { ChatbotPromptRequest } from './dto/chatbot-prompt.request';
import { map, Observable, of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ChatbotService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  public prompt(
    chatbotPromptRequest: ChatbotPromptRequest,
  ): Observable<ChatbotPromptResponse> {
    return this.httpService
      .post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
        {
          contents: [{ parts: [{ text: chatbotPromptRequest.content }] }],
        },
        {
          params: {
            key: this.apiKey,
          },
        },
      )
      .pipe(
        map((response) => {
          const content: string = response.data.candidates[0].content.parts
            .map((part) => part.text)
            .join('\n');

          const responseData: ChatbotPromptResponse = {
            content,
          };

          return responseData;
        }),
      );
  }

  get apiKey() {
    return this.configService.get('GOOGLE_AI_API_KEY');
  }
}
