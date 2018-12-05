import {Routes} from '@angular/router';

import {ScheduleComponent} from './containers/schedule/schedule.component';
import {ScheduleDetailComponent} from './containers/schedule-detail/schedule-detail.component';

export const routes: Routes = [
	{path: '', component: ScheduleComponent},
	{path: ':id', component: ScheduleDetailComponent}
];
