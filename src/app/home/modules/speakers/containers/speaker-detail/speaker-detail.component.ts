import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';

import {SpeakersService} from '../../services/speakers.service';
import {BrowserService} from '@ngbe/services';

@Component({
	selector: 'speaker-detail',
	templateUrl: 'speaker-detail.component.html',
	styleUrls: ['speaker-detail.component.scss'],
	host: {
		'[class.ion-page]': 'true'
	}
})
export class SpeakerDetailComponent {
	speaker$ = this.route.params.pipe(
		map(params => params.id),
		switchMap(id => this.speakersService.speakerById(id))
	);

	title$ = this.speaker$.pipe(
		map(speaker => `${speaker.firstName} ${speaker.name}`)
	);

	backAction$ = this.route.queryParams.pipe(
		map(params => params.goBack),
		map(goBack => goBack || 'home/(speakers:speakers)')
	);

	constructor(
		private readonly browserService: BrowserService,
		private readonly speakersService: SpeakersService,
		private readonly route: ActivatedRoute
	) {}

	openUrl(url: string) {
		this.browserService.open(url);
	}
}
