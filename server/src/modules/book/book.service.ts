import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createCatDto: Book): Promise<Book> {
    const createdBook = new this.bookModel(createCatDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    try {
      return this.bookModel.find({});
    } catch (err) {
      console.log('errr', err);
    }
  }
}
