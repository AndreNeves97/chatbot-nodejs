import { Module } from '@nestjs/common';
import { ChatbotModule } from './chatbot/chatbot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ChatbotModule, ConfigModule.forRoot()],
})
export class AppModule {}
