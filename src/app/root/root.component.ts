import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: 'root.component.html'
})
export class RootComponent {
	async ngOnInit() {
		const messaging = firebase.messaging();
		await messaging.requestPermission();
	}
}
