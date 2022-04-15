import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books/response/book';

@Component({
  selector: 'bkr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input()
  book?: Book;

  constructor() {}

  loadReviews() {
    console.log(this.book);
  }
}
