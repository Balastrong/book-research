import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bkr-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input()
  pageSize: number = 20;

  /**
   * Ritorna l'indice 0-based della pagina da cercare
   */
  @Output()
  onPageSelect: EventEmitter<number> = new EventEmitter<number>();

  pages!: number;
  currentPage!: number;

  update(elements: number, currentPage: number) {
    this.pages = Math.ceil(elements / this.pageSize) || 1;
    this.currentPage = currentPage;
  }

  emit(page: number) {
    this.onPageSelect.emit(page);
  }
}
