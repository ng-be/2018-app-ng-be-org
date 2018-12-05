import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

// Containers
import {MapComponent} from './containers/map/map.component';

// Components
import {GoogleMapComponent} from './components/google-map/google-map.component';

import {routes} from './map.routing';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		MapComponent,
		GoogleMapComponent
	]
})
export class MapModule {}
