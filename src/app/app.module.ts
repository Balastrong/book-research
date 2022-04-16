import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { BookCardComponent } from './domain-components/book-card/book-card.component';
import { ReviewsCardComponent } from './domain-components/reviews-card/reviews-card.component';
import { DialogComponent } from './generic-components/dialog/dialog.component';
import { BooksService } from './services/books.service';
import { TabsComponent } from './generic-components/tabs/tabs.component';
import { TabComponent } from './generic-components/tabs/tab.component';
import { BookSearchComponent } from './domain-components/book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    BookCardComponent,
    ReviewsCardComponent,
    DialogComponent,
    TabsComponent,
    TabComponent,
    BookSearchComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
