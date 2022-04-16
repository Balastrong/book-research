import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { BookRequestModel } from './models/books/request/bookRequestModel';
import { Book } from './models/books/response/book';
import { BooksService } from './services/books.service';
import { removeEmptyFields } from './utils/dataUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
