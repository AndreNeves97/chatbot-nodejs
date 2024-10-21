import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ChatbotController],
  providers: [ChatbotService],
  imports: [ConfigModule, HttpModule],
})
export class ChatbotModule {}
