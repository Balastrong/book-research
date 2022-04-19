import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FavouritesService } from './services/favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  favouritesCount$: Observable<number>;

  constructor(public favouriteService: FavouritesService) {
    this.favouritesCount$ = favouriteService.updates().pipe(map((books) => books?.length ?? 0));
  }
}
