import {Routes} from '@angular/router';

import {SpeakersComponent} from './containers/speakers/speakers.component';
import {SpeakerDetailComponent} from './containers/speaker-detail/speaker-detail.component';

export const routes: Routes = [
	{path: '', component: SpeakersComponent},
	{path: ':id', component: SpeakerDetailComponent}
];
