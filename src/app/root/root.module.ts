import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, RouteReuseStrategy} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ServiceWorkerModule} from '@angular/service-worker';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {environment} from 'src/environments/environment';
import {RootComponent} from './root.component';

import {routes} from './root.routing';

@NgModule({
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		RouterModule.forRoot(routes),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
	],
	declarations: [
		RootComponent
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
	],
	bootstrap: [
		RootComponent
	]
})
export class RootModule {}
