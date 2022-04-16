import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [AppComponent, BookCardComponent, TooltipDirective, DialogComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
