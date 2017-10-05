import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES = [
	{ path: 'home', component: null },
	{ path: 'transaction/:id', component: null}
];

@NgModule({
	imports:[
		RouterModule.forRoot(APP_ROUTES, {
			enableTracing: true
		})
	],
	exports: [
	    RouterModule
	  ]
})

export class AppRouting{
	
	constructor() {}
}