import {Component, Input, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

import {ScheduleItem} from '../../entities';

@Component({
	selector: 'schedule-item',
	templateUrl: 'schedule-item.component.html',
	styleUrls: ['schedule-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent {
	@Input() item: ScheduleItem;
	@Output() detail = new EventEmitter<ScheduleItem>();

	onSelect() {
		this.detail.emit(this.item);
	}
}
