import { Component, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'bkr-tab',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input() label!: string;
  active!: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
}
