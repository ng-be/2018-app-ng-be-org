import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './containers/home.component';

import {routes} from './home.routing';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule {}
