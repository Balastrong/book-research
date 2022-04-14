import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { BookRequestModel } from './models/books/request/searchModel';
import { BooksService } from './services/books.service';
import { removeEmptyFields } from './utils/dataUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: IFormGroup<BookRequestModel>;
  formBuilder: IFormBuilder;

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
      this.booksService.getBooks(removeEmptyFields(this.form.value)).subscribe((res) => console.log(res));
    }
  }
}
