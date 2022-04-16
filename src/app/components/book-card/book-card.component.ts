import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book, Rank } from 'src/app/models/books/response/book';
import { Review } from 'src/app/models/books/response/review';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'bkr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnChanges {
  @Input()
  book?: Book;
  ranks?: Rank[];
  reviews?: Review[];
  isReviewDialogVisible: boolean = false;

  constructor(private booksService: BooksService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']?.currentValue) {
      this.ranks = this.book?.getTopRanks() ?? [];
    }
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
}
