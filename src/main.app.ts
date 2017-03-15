import {Component} from 'ng-metadata/core';
import {MenuLevelComponent} from './component/menu-level.component';
import {MultiLevelMenuComponent} from './component/menu-parent.component';

@Component({
  directives: [
    MultiLevelMenuComponent,
    MenuLevelComponent,
  ],
  selector: 'main-app',
  template: `
  <multi-level-menu>
    <menu-level label="filters"></menu-level>
    <menu-level label="another"></menu-level>
    <menu-level label="third"></menu-level>
  </multi-level-menu>`
})
export class MainAppComponent {
  ngOnInit(): void {
    console.log('app init');
  }
}