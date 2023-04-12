import { Book } from '../custom-types'

// Define an array of Book objects to use for testing
const BookMock: Book[] = [
  {
    author_am: 'Խոդեդան',
    publisher: 'Դաշտենց Խ.',
    weight: 0.78000,
    barcode: '9789939663593',
    language: 'Հայերեն',
    newness: 'no',
    printing_cover: 'Կոշտ կազմ',
    publication_data: 10,
    pages: 274,
    img_urls: ['uniknown.jpg']
  },
  {
    author_am: 'Խոդեդան',
    publisher: 'Դաշտենց Խ.',
    weight: 0.78000,
    barcode: '9789939663593',
    language: 'Հայերեն',
    newness: 'no',
    printing_cover: 'Կոշտ կազմ',
    publication_data: 10,
    pages: 274,
    img_urls: ['uniknown.jpg']
  },
  {
    author_am: 'Author 3',
    publisher: 'Publisher 3',
    weight: 0.50000,
    barcode: '123456789',
    language: 'English',
    newness: 'yes',
    printing_cover: 'Hardcover',
    publication_data: 5,
    pages: 200,
    img_urls: ['book3.jpg']
  },
  {
    author_am: 'Author 4',
    publisher: 'Publisher 4',
    weight: 0.60000,
    barcode: '987654321',
    language: 'Spanish',
    newness: 'yes',
    printing_cover: 'Paperback',
    publication_data: 3,
    pages: 150,
    img_urls: ['book4.jpg']
  }
]

export default BookMock