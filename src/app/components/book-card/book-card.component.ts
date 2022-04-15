import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book, Rank } from 'src/app/models/books/response/book';

@Component({
  selector: 'bkr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnChanges {
  @Input()
  book?: Book;
  ranks?: Rank[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']?.currentValue) {
      this.ranks = this.book?.getTopRanks() ?? [];
    }
  }

  loadReviews() {
    //TODO
  }
}
