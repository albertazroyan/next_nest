import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDocument } from './schemas/book.schema';

// const bookTestData: Book = {
//   author_am: 'nelson',
//   author_ru: 'nelson',
//   author_en: 'nelston',
//   publisher_am: 'fgr',
//   publisher_ru: 'gff',
//   publisher_en: 'gff',
//   weight: 17,
//   barcode: 'ffgfg',
//   language: 'gfgfgf',
//   newness: 'gfgf',
//   printing_cover: 'ffgfggf',
//   publication_data: 10,
//   pages: 15,
//   img_urls: ['test.jpg', 'test1.jpg'],
// };

@Controller('book')
export class BookeController {
  constructor(private bookService: BookService) {}
  @Get('/')
  findAll() {
    return this.bookService.findAll();
  }
  @Post('/')
  create(@Body() Book: BookDocument) {
    return this.bookService.create(Book);
  }
}
