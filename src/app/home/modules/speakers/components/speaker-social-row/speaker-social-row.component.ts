import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'speaker-social-row',
	templateUrl: 'speaker-social-row.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerSocialRowComponent {
	@Input() social: any;
	@Output() select = new EventEmitter<string>();

	onContact(type: 'twitter' | 'github' | 'website', event: Event) {
		if (type === 'twitter') {
			this.select.emit(`https://twitter.com/${this.social.twitter}`);
		} else if (type === 'github') {
			this.select.emit(`https://github.com/${this.social.github}`);
		} else if (type === 'website') {
			this.select.emit(this.social.website);
		}

		event.stopPropagation();
	}
}
