import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bkr-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DialogComponent {
  @Input()
  visible: boolean = false;
  @Input()
  closeOnEsc: boolean = true;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter();

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    if (this.closeOnEsc) {
      this.close();
    }
  }

  /**
   * Chiude il dialog se il click è esattamente sull'overlay
   */
  ousideClick(event: MouseEvent) {
    if ((<HTMLElement>event.target)?.classList?.contains('dialog-overlay')) {
      this.close();
    }
  }

  /**
   * Emette false all'esterno per permettere di chiudere il dialog
   */
  close(): void {
    this.visibleChange.emit(false);
  }
}
