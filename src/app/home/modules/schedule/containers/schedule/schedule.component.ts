import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {ScheduleService} from '../../services/schedule.service';
import {ScheduleItem} from '../../entities';

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

	constructor(
		private readonly scheduleService: ScheduleService,
		private readonly router: Router
	) { }

	showDetail(item: ScheduleItem) {
		this.router.navigateByUrl(`/home/(schedule:schedule/${item.id})`);
	}
}
