import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/books/response/review';

@Component({
  selector: 'bkr-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.scss'],
})
export class ReviewsCardComponent {
  @Input()
  reviews?: Review[];
}
