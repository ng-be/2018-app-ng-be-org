import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {merge} from 'rxjs';
import {map, switchMap, publishReplay, refCount, distinctUntilChanged} from 'rxjs/operators';

import {StorageService} from '@ngbe/services';
import {Speaker} from '../entities';

@Injectable({
	providedIn: 'root'
})
export class SpeakersService {
	private remoteSpeakers$ = this.db.collection('speakers').snapshotChanges().pipe(
		map(rawData => {
			return rawData.map(rawValue => {
				const id = rawValue.payload.doc.id;
				const data = rawValue.payload.doc.data();

				return {
					id,
					...data
				} as Speaker;
			});
		}),
		switchMap(speakers => this.storage.set('speakers', speakers))
	);
	private localSpeakers$ = this.storage.get<Speaker[]>('speakers');

	speakers$ = merge(
		this.remoteSpeakers$,
		this.localSpeakers$
	).pipe(
		// Make sure it doesn't emit twice when the remote and local data is indentical
		distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
		publishReplay(1),
		refCount()
	);

	loading$ = this.speakers$.pipe(map(speakers => !Boolean(speakers)));

	constructor(
		private readonly db: AngularFirestore,
		private readonly storage: StorageService
	) {}

	speakerById(id: string) {
		return this.speakers$.pipe(
			map(speakers => speakers.find(speaker => speaker.id === id))
		);
	}
}
