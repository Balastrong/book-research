import { Component, Input, OnInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'bkr-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  tabs: TabComponent[] = [];
  activeIndex: number = 0;

  setActive(index: number) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    this.tabs[index].active = true;

    this.activeIndex = index;
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
