import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { SearchModel } from './models/books/request/searchModel';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: IFormGroup<SearchModel>;
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
    this.booksService.getBooks().subscribe((res) => console.log(res));
    console.log(this.form.value);
  }
}
