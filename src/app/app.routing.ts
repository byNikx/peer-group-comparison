import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountEntriesComponent } from './components/account-entries/account-entries.component';
import { TypeSelectionComponent } from './components/type-selection/type-selection.component';
import { ComparisonComponent } from './components/comparison/comparison.component';


const APP_ROUTES = [
	{ path: 'account-entries', component: AccountEntriesComponent},
	{ path: 'type-selection', component: TypeSelectionComponent},
	{ path: 'show-comparison', component: ComparisonComponent}
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