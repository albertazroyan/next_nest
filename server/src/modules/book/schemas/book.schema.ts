import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  author_am: string;

  @Prop()
  author_ru: string;

  @Prop()
  author_en: string;

  @Prop()
  publisher_am: string;

  @Prop()
  publisher_ru: string;

  @Prop()
  publisher_en: string;

  @Prop()
  weight: number;

  @Prop()
  barcode: string;

  @Prop()
  language: string;

  @Prop()
  newness: string;

  @Prop()
  printing_cover: string;

  @Prop()
  publication_data: number;

  @Prop()
  pages: number;

  @Prop([String])
  img_urls: string[];
}

export const Book_Schema = SchemaFactory.createForClass(Book);
