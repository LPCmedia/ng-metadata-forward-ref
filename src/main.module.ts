import * as angular from 'angular';
import {NgModule} from 'ng-metadata/core';
import {bundle} from 'ng-metadata/core';

import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata/core';

import {MenuLevelComponent} from './component/menu-level.component';
import {MultiLevelMenuComponent} from './component/menu-parent.component';
import {MainAppComponent} from './main.app';


@NgModule({
  declarations: [ 
    MainAppComponent,
    MenuLevelComponent,
    MultiLevelMenuComponent
  ],
})
class AppModule {
}

const Shell: ng.IModule = bundle(AppModule, []);

angular.module('app', [
    Shell.name,
]);

angular.bootstrap(document, ['app'], {strictDi: true});
