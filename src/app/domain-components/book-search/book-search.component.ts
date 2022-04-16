import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { BookRequestModel } from 'src/app/models/books/request/bookRequestModel';
import { Book } from 'src/app/models/books/response/book';
import { BooksService } from 'src/app/services/books.service';
import { removeEmptyFields } from 'src/app/utils/dataUtils';

@Component({
  selector: 'brk-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  form!: IFormGroup<BookRequestModel>;
  formBuilder: IFormBuilder;
  books: Book[] = [];

  constructor(formBuilder: FormBuilder, private booksService: BooksService) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [''],
      author: [''],
      isbn: [''],
    });
  }

  search(): void {
    if (this.form.value != null) {
      this.booksService.getBooks(removeEmptyFields(this.form.value)).subscribe((response) => {
        if (response != null) {
          this.books = response.results || [];
        }
      });
    }
  }
}
