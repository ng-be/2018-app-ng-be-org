import {Routes} from '@angular/router';

import {HomeComponent} from './containers/home.component';

export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: '',
				redirectTo: '/home/(schedule:schedule)',
				pathMatch: 'full',
			},
			{
				path: 'schedule',
				outlet: 'schedule',
				loadChildren: './modules/schedule/schedule.module#ScheduleModule'
			},
			{
				path: 'speakers',
				outlet: 'speakers',
				loadChildren: './modules/speakers/speakers.module#SpeakersModule'
			},
			{
				path: 'about',
				outlet: 'about',
				loadChildren: './modules/about/about.module#AboutModule'
			},
			{
				path: 'map',
				outlet: 'map',
				loadChildren: './modules/map/map.module#MapModule'
			}
		]
	},
	{
		path: '',
		redirectTo: '/home/(schedule:schedule)',
		pathMatch: 'full'
	}
];
