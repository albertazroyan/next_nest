import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookeController {
  constructor(private bookService: BookService) {}
  @Get('/')
  getAllQuiz() {
    return this.bookService.findAll();
  }
}
