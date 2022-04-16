import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books/response/book';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'bkr-book-favourite',
  templateUrl: './book-favourite.component.html',
  styleUrls: ['./book-favourite.component.scss'],
})
export class BookFavouriteComponent {
  constructor(public favouriteService: FavouritesService) {}
}
