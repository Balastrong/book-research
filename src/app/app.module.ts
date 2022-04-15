import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [AppComponent, BookCardComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
