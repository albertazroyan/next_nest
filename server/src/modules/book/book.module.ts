import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, Book_Schema } from './schemas/book.schema';
import { BookeController } from './book.controller';
import { BookService } from './book.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: Book_Schema }]),
  ],
  controllers: [BookeController],
  providers: [BookService],
})
export class BookModule {}
