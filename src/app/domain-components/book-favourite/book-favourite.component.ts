import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books/response/book';

@Component({
  selector: 'bkr-book-favourite',
  templateUrl: './book-favourite.component.html',
  styleUrls: ['./book-favourite.component.scss']
})
export class BookFavouriteComponent  {
  books: Book[] = [];

  constructor() { }

}
