import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { PaginatorComponent } from 'src/app/generic-components/paginator/paginator.component';
import { BookRequestModel } from 'src/app/models/books/request/bookRequestModel';
import { Book } from 'src/app/models/books/response/book';
import { BooksService } from 'src/app/services/books.service';
import { removeEmptyFields } from 'src/app/utils/dataUtils';
import { ISBNLengthTimeout } from 'src/app/utils/form-validators';

@Component({
  selector: 'brk-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginator!: PaginatorComponent;

  form!: IFormGroup<BookRequestModel>;
  formBuilder: IFormBuilder;
  books: Book[] = [];
  isLoading: boolean = false;

  constructor(formBuilder: FormBuilder, private booksService: BooksService) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: [''],
        author: [''],
        isbn: ['', null, [ISBNLengthTimeout.bind(this)]],
      },
      { validators: [this.nonEmptyForm()] },
    );
  }

  search(page: number = 0): void {
    if (this.form.value != null) {
      const requestModel: BookRequestModel = {
        ...removeEmptyFields(this.form.value),
        offset: page * BooksService.PAGE_SIZE,
      };

      this.isLoading = true;
      this.booksService.getBooks(requestModel).subscribe({
        next: (response) => {
          if (response != null) {
            this.books = response.results || [];
            this.paginator.update(response.numResults, page);
          }
        },
        complete: () => (this.isLoading = false),
      });
    }
  }

  private nonEmptyForm(): any {
    return (formGroup: IFormGroup<BookRequestModel>) => {
      return formGroup.value?.author || formGroup.value?.isbn || formGroup.value?.title
        ? null
        : {
            emptyForm: true,
          };
    };
  }
}
