import { Module } from '@nestjs/common';
import { QuizeController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizeController],
  providers: [QuizService],
})
export class QuizModule {}
