import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

// Containers
import {ScheduleComponent} from './containers/schedule/schedule.component';
import {ScheduleDetailComponent} from './containers/schedule-detail/schedule-detail.component';

// Components
import {ScheduleItemComponent} from './components/schedule-item/schedule-item.component';
import {ScheduleItemDetailComponent} from './components/schedule-item-detail/schedule-item-detail.component';

import {routes} from './schedule.routing';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		ScheduleComponent,
		ScheduleDetailComponent,
		ScheduleItemComponent,
		ScheduleItemDetailComponent
	]
})
export class ScheduleModule {}
