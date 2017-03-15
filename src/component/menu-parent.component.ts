import {Component} from 'ng-metadata/core';
import {Input, Output} from 'ng-metadata/core';
import {EventEmitter} from 'ng-metadata/core';
import {HostBinding} from 'ng-metadata/core';
import {ContentChildren} from 'ng-metadata/core';
import {AfterContentInit} from 'ng-metadata/core';
import {AfterContentChecked} from 'ng-metadata/core';
import {MenuLevelComponent} from './menu-level.component';

@Component({
  legacy: {
    transclude: true,
  },
  selector: 'multi-level-menu',
  template: `
    <aside ng-class="{open: $ctrl.isOpen}">
      <p>This is the menu</p>
      <ng-transclude></ng-transclude>
    </aside>
  `,
})
export class MultiLevelMenuComponent implements AfterContentChecked {

  @Input() isOpen: boolean;
  @Output() toggled: EventEmitter<boolean>;

  @HostBinding('[class.collapsed]')
  get collapsed(): boolean {
    return !this.isOpen;
  }

  @ContentChildren(MenuLevelComponent) acqMenuLevel: Array<MenuLevelComponent>;

  constructor() {
    this.toggled = new EventEmitter<boolean>();
    if (typeof(this.isOpen) === 'undefined') {
      this.isOpen = false;
    }
  }

  ngAfterContentChecked(): void {
    this.acqMenuLevel.forEach((el) => {
      console.log(el, 'from parent');
    });
  }

}
