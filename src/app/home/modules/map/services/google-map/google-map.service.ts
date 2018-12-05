import {Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import {startWith, map, shareReplay} from 'rxjs/operators';

import {ScriptInjectorService} from '@ngbe/services';

declare const window: any;

window.onGoogleMapInit = () => {
	window.googleMapReady = true;

	// Dispatch `gmap` event to trigger our listeners
	const event = new Event('gmap');
	window.dispatchEvent(event);
};

@Injectable({
	providedIn: 'root'
})
export class GoogleMapService {
	ready$ = fromEvent(window, 'gmap').pipe(
		map(() => true),
		startWith(window.googleMapReady),
		shareReplay(1)
	);

	constructor(
		private scriptInjector: ScriptInjectorService
	) {
		this.scriptInjector.injectUrl('https://maps.googleapis.com/maps/api/js?key=AIzaSyCY6nxCVSvaMs278hepdi1ZxluHmvrsPmw&callback=onGoogleMapInit', {
			async: true,
			defer: true
		});
	}
}
