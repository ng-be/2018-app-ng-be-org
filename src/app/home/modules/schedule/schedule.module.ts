import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

// Containers
import {ScheduleComponent} from './containers/schedule/schedule.component';

import {routes} from './schedule.routing';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		ScheduleComponent
	]
})
export class ScheduleModule {}
