import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Book } from '../models/books/response/book';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  private readonly storeKey: string = 'bookList';
  private updateSubject: ReplaySubject<Book[]> = new ReplaySubject<Book[]>();

  constructor() {
    this.updateSubject.next(this.readFavourites());
  }

  /**
   * Subject a cui sottoscriversi per aggiornamenti real-time sui preferiti
   */
  public updates(): Subject<Book[]> {
    return this.updateSubject;
  }

  public toggleFavourite(book: Book): Book[] {
    const favourites = this.readFavourites();
    const newFavourites = [...favourites];
    const index = newFavourites.findIndex((b) => b.equals(book));
    if (index > -1) {
      newFavourites.splice(index, 1);
    } else {
      newFavourites.push(book);
    }

    const finalList = this.writeFavourites(newFavourites) ? newFavourites : favourites;

    this.updateSubject.next(finalList);
    return finalList;
  }

  private readFavourites(): Book[] {
    const storage = localStorage.getItem(this.storeKey);
    return storage ? (<Book[]>JSON.parse(storage)).map((b) => new Book(b)) : [];
  }

  private writeFavourites(books: Book[]): boolean {
    try {
      localStorage.setItem(this.storeKey, JSON.stringify(books));
    } catch {
      return false;
    }

    return true;
  }
}
