import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { filter, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Book, Rank } from 'src/app/models/books/response/book';
import { Review } from 'src/app/models/books/response/review';
import { BooksService } from 'src/app/services/books.service';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'bkr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnChanges, OnDestroy {
  @Input()
  book?: Book;
  ranks?: Rank[];
  reviews?: Review[];
  isReviewDialogVisible: boolean = false;
  isFavourite: boolean = false;

  unsubscribe$: Subject<void> = new Subject();

  constructor(private booksService: BooksService, private favouritesService: FavouritesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']?.currentValue) {
      this.ranks = this.book?.getTopRanks() ?? [];

      this.favouritesService
        .updates()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((books) => {
          this.isFavourite = books.some((b) => b.equals(this.book));
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadReviews() {
    if (this.book) {
      if (this.reviews === undefined) {
        this.booksService.getReviews({ title: this.book.title, author: this.book.author }).subscribe((response) => {
          this.reviews = response.results;
          this.toggleReviewDialog(true);
        });
      } else {
        this.toggleReviewDialog(true);
      }
    }
  }

  toggleReviewDialog(isVisible: boolean) {
    this.isReviewDialogVisible = isVisible;
  }

  addFavourite() {
    if (this.book) {
      this.favouritesService.toggleFavourite(this.book);
    }
  }
}
