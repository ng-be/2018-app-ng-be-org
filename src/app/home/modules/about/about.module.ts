import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

// Containers
import {AboutComponent} from './containers/about/about.component';

// Components
import {AboutMenuComponent} from './components/menu/about-menu.component';

import {routes} from './about.routing';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		AboutComponent,
		AboutMenuComponent
	],
	entryComponents: [
		AboutMenuComponent
	]
})
export class AboutModule {}
