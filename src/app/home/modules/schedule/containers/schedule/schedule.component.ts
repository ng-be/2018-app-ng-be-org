import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {ScheduleService} from '../../services/schedule.service';
import {ScheduleItem} from '../../entities';
import {BrowserService} from '@ngbe/services';

@Component({
	selector: 'schedule',
	templateUrl: 'schedule.component.html',
	styleUrls: ['schedule.component.scss'],
	host: {
		'[class.ion-page]': 'true'
	}
})
export class ScheduleComponent {
	schedule$ = this.scheduleService.schedule$;
	loading$ = this.scheduleService.loading$;

	constructor(
		private readonly browserService: BrowserService,
		private readonly scheduleService: ScheduleService,
		private readonly router: Router
	) { }

	openSlides() {
		this.browserService.open('https://n2w.medialooks.com:8080/o4iGXiYfgihMMEfr/y_Frp0eSte0yKVv5DWPb/');
	}

	showDetail(item: ScheduleItem) {
		this.router.navigateByUrl(`/home/(schedule:schedule/${item.id})`);
	}
}
