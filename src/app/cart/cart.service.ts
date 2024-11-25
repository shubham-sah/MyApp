import { Injectable } from '@angular/core';
import { Book } from '../Types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Book[] = [];

  add(book: Book) {
    console.log('cart service');
    this.cart.push(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b) => b != book);
  }
}
