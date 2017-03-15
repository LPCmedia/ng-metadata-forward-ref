/**
 * Manages the levels in the multiple level menu
 */

import {Host} from 'ng-metadata/core';
import {Component} from 'ng-metadata/core';
import {Output} from 'ng-metadata/core';
import {EventEmitter} from 'ng-metadata/core';
import {HostListener} from 'ng-metadata/core';
import {Input} from 'ng-metadata/core';
import {Inject} from 'ng-metadata/core';
import {forwardRef} from 'ng-metadata/core';
import {MultiLevelMenuComponent} from './menu-parent.component';

@Component({
  selector: 'menu-level',
  template: `{{$ctrl.label}}`,
})
export class MenuLevelComponent {
  @Input() label: string;
  @Output() levelClicked: EventEmitter<any> = new EventEmitter<any>();

  private internalLevel: number = 0;

  constructor(
    @Inject('$element') private $element: ng.IAugmentedJQuery,
    @Host() @Inject( forwardRef( () => MultiLevelMenuComponent ) ) private multiLevelMenuComponent: MultiLevelMenuComponent,
  ) {}

}
