import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'cracking the coding interview',
        author: 'Robert',
        price: 1000,
        image:
          'https://m.media-amazon.com/images/I/410hiaPGyCL._SY445_SX342_.jpg',
      },
      {
        name: 'The Pyhton wokrbook',
        author: 'Ben Stephen',
        price: 1100,
        image:
          'https://m.media-amazon.com/images/I/41l+sdW+xFL._SY445_SX342_.jpg',
      },
      {
        name: 'Introduction to Algorithms',
        author: ' Thomas H. Cormen ',
        price: 7000,
        image:
          'https://m.media-amazon.com/images/I/41+aXH4mDbL._SX342_SY445_.jpg',
      },
    ];
  }
}
