import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookRequestModel } from '../models/books/request/bookRequestModel';
import { ReviewRequestModel } from '../models/books/request/reviewRequestModel';
import { Book } from '../models/books/response/book';
import { BookApiResponse } from '../models/books/response/bookApiResponse';
import { Review } from '../models/books/response/review';
import { flatObjectToQueryString, objectKeysToCamelCase } from '../utils/dataUtils';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl: string = 'https://api.nytimes.com/svc/books/v3';
  private apiKey!: string;

  constructor(private http: HttpClient) {
    this.getApiKey();
  }

  private getApiKey() {
    if (environment.dev) {
      this.http.get('assets/API_KEY', { responseType: 'text' }).subscribe((key) => {
        this.apiKey = key.toString();
      });
    } else {
      this.apiKey = environment.apiKey;
    }
  }

  /**
   * Restituisce la lista di libri best seller
   * I campi sono mappati in camelCase (l'api restituisce in snake_case)
   */
  public getBooks(requestModel: BookRequestModel): Observable<BookApiResponse<Book>> {
    const authenticatedRequest = { ...requestModel, 'api-key': this.apiKey };
    return this.http
      .get<BookApiResponse<Book>>(
        `${this.baseUrl}/lists/best-sellers/history.json?${flatObjectToQueryString(authenticatedRequest)}`,
      )
      .pipe(
        map((res: BookApiResponse<Book>) => ({
          ...res,
          results: res.results.map((book) => new Book(book)),
        })),
      );
  }

  public getReviews(requestModel: ReviewRequestModel): Observable<BookApiResponse<Review>> {
    const authenticatedRequest = { ...requestModel, 'api-key': this.apiKey };
    return this.http.get<BookApiResponse<Review>>(
      `${this.baseUrl}/reviews.json?${flatObjectToQueryString(authenticatedRequest)}`,
    );
  }
}
