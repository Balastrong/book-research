import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books/response/book';

@Component({
  selector: 'bkr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input()
  book?: Book;

  constructor() {}

  ngOnInit(): void {}
}
