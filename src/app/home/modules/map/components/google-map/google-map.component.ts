import {Component, ElementRef, ViewChild, Input, ChangeDetectionStrategy, Output, EventEmitter, NgZone} from '@angular/core';

declare const google: any;

@Component({
	selector: 'google-map',
	template: `
		<div class="google-map" #map></div>
	`,
	styleUrls: ['google-map.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent {
	@Input() markers: any;
	@Output() idle = new EventEmitter<boolean>();

	@ViewChild('map') map: ElementRef;

	constructor(
		private zone: NgZone
	) {}

	ngOnInit() {
		const map = new google.maps.Map(this.map.nativeElement, {
			center: this.markers.find(marker => marker.center),
			zoom: 13
		});

		for (const marker of this.markers) {
			const infoWindow = new google.maps.InfoWindow({
				content: `<h5>${marker.name}</h5>`
			});

			const pin = new google.maps.Marker({
				position: marker,
				map,
				title: marker.name
			});

			pin.addListener('click', () => {
				infoWindow.open(map, pin);
			});
		}

		google.maps.event.addListenerOnce(map, 'idle', () => {
			this.map.nativeElement.classList.add('show-map');

			this.zone.run(() => {
				this.idle.emit(true);
			});
		});
	}
}
