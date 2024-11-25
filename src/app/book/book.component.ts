import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../Types/Book';
import { animate } from '@angular/animations';
import { emit } from 'process';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Input() i: number = 0;

  isInCart: boolean = false;

  //@Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    console.log({ ondestroy: 'destory comp' });
  }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeToCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
