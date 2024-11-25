import { Component, OnInit } from '@angular/core';
import { Book } from '../Types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) {}

  books: Book[] = [];

  //cart: Map<string, number> = new Map();

  isDisabled: boolean = false;
  showBooks: boolean = false;
  bookName: string = '';
  typingBookName: string = '';
  myName2way: string = '';
  bookCount: number = 0;

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  // addToCart(bookObject: Book) {
  //   const bookKey = bookObject?.name;
  //   if (this.cart.has(bookKey)) {
  //     let temp = this.cart.get(bookKey)!;
  //     temp += 1;
  //     this.cart.set(bookKey, temp);
  //   } else {
  //     this.cart.set(bookKey, 1);
  //   }

  //   this.bookCount += 1;
  //   console.log(this.cart);
  // }

  // mapEntries() {
  //   return Array.from(this.cart.entries());
  // }

  // clearCart() {
  //   this.cart.clear();
  //   this.bookCount = 0;
  // }

  onClick() {
    this.isDisabled = true;
    this.showBooks = true;
  }

  onClick2() {
    this.isDisabled = false;
    this.showBooks = false;
  }

  onInput(event: any) {
    const selectedValue = event.target.value;
    this.bookName = selectedValue;
  }

  onKeyStroke(event: any) {
    const selectedValue = event.target.value;
    this.typingBookName = selectedValue;
  }

  on2wayChange(event: any) {
    console.log(event);
  }
}

/*
things i can do more
- add a search function using a text input fields which can search on the list of books or something like that
*/
