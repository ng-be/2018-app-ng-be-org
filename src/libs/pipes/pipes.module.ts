import {NgModule} from '@angular/core';

import {FirstParagraphPipe} from './first-paragraph/first-paragraph.pipe';

@NgModule({
	declarations: [FirstParagraphPipe],
	exports: [FirstParagraphPipe]
})
export class PipesModule {}
