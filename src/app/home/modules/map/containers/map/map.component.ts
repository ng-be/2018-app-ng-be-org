import {Component} from '@angular/core';

import {BrowserService} from '@ngbe/services';

import {GoogleMapService} from '../../services/google-map/google-map.service';

@Component({
	selector: 'map',
	templateUrl: 'map.component.html',
	styleUrls: ['map.component.scss'],
	host: {
		'[class.ion-page]': 'true'
	}
})
export class MapComponent {
	showStatic = true;
	googleMapReady$ = this.googleMapService.ready$;

	markers = [
		{
			name: 'Holiday Inn - Ghent expo',
			lat: 51.0259671,
			lng: 3.6895503,
			center: true
		},
		{
			name: 'Ghent - St Pieters - Railway Station',
			lat: 51.036043,
			lng: 3.710872,
			center: false
		}
	];

	constructor(
		private browserService: BrowserService,
		private googleMapService: GoogleMapService
	) {}

	onMapIdle() {
		// Hide the static map
		this.showStatic = false;
	}

	openGoogleMaps() {
		this.browserService.open('https://www.google.com/maps/place/Holiday+Inn+Gent+Expo/@51.0260068,3.687441,17z/data=!3m1!4b1!4m5!3m4!1s0x47c373cd0158df95:0xac18676eb1dbc0ac!8m2!3d51.0260034!4d3.689635');
	}
}
