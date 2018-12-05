import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {merge} from 'rxjs';
import {map, switchMap, publishReplay, refCount, distinctUntilChanged} from 'rxjs/operators';

import {StorageService} from '@ngbe/services';

import {ScheduleItem} from '../entities';

@Injectable({
	providedIn: 'root'
})
export class ScheduleService {
	private remoteSchedule$ = this.db.collection('schedule').snapshotChanges().pipe(
		map(rawData => {
			return rawData
				.map(rawValue => {
					const id = rawValue.payload.doc.id;
					const data = rawValue.payload.doc.data();

					return {
						id,
						...data
					} as ScheduleItem;
				})
				.sort((a: ScheduleItem, b: ScheduleItem) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
		}),
		switchMap(items => this.storage.set('schedule', items))
	);
	private localSchedule$ = this.storage.get<ScheduleItem[]>('schedule');

	schedule$ = merge(
		this.remoteSchedule$,
		this.localSchedule$
	).pipe(
		// Make sure it doesn't emit twice when the remote and local data is indentical
		distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
		publishReplay(1),
		refCount()
	);

	loading$ = this.schedule$.pipe(map(items => !Boolean(items)));

	constructor(
		private readonly db: AngularFirestore,
		private readonly storage: StorageService
	) {}

	itemById(id: string) {
		return this.schedule$.pipe(
			map(items => items.find(item => item.id === id))
		);
	}
}
