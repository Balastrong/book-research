import { Component } from '@angular/core';
import { FavouritesService } from './services/favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public favouriteService: FavouritesService) {}
}
