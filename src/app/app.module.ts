import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksService } from './services/books.service';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [AppComponent, BookCardComponent, TooltipDirective],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
