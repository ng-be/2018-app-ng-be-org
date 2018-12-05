import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

import {ScheduleService} from '../../services/schedule.service';

@Component({
	selector: 'schedule-detail',
	templateUrl: 'schedule-detail.component.html',
	styleUrls: ['schedule-detail.component.scss'],
	host: {
		'[class.ion-page]': 'true'
	}
})
export class ScheduleDetailComponent {
	item$ = this.route.params.pipe(
		map(params => params.id),
		switchMap(id => this.scheduleService.itemById(id))
	);

	title$ = this.item$.pipe(
		map(item => item.type)
	);

	constructor(
		private readonly scheduleService: ScheduleService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {}

	onSpeakerSelected(id: number) {
		const goBack = encodeURIComponent(this.router.url);

		this.router.navigateByUrl(`home/(speakers:speakers/${id})?goBack=${goBack}`);
	}
}
