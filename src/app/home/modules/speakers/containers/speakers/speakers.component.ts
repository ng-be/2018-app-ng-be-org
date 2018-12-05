import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

import {BrowserService} from '@ngbe/services';

import {SpeakersService} from '../../services/speakers.service';

@Component({
	selector: 'speakers',
	templateUrl: 'speakers.component.html',
	styleUrls: ['speakers.component.scss'],
	host: {
		'[class.ion-page]': 'true'
	}
})
export class SpeakersComponent {
	speakers$ = this.speakersService.speakers$;
	loading$ = this.speakersService.loading$;

	constructor(
		private readonly speakersService: SpeakersService,
		private readonly browserService: BrowserService,

		private readonly navController: NavController
	) {}

	openDetail(id: string) {
		this.navController.navigateForward(`home/(speakers:speakers/${id})`, true);
	}

	openUrl(url: string) {
		this.browserService.open(url);
	}
}
