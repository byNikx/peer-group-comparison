import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountEntriesComponent } from './components/account-entries/account-entries.component';
import { TypeSelectionComponent } from './components/type-selection/type-selection.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { HomeComponent } from './components/home/home.component';
import { SpendingOverTimeComponent } from './components/spending-over-time/spending-over-time.component';



const APP_ROUTES = [
	{ path: 'home', component: HomeComponent},
	{ path: 'account-entries', component: AccountEntriesComponent},
	{ path: 'type-selection', component: TypeSelectionComponent},
	{ path: 'show-comparison', component: ComparisonComponent},
	{ path: 'spending-over-time', component: SpendingOverTimeComponent}
];

@NgModule({
	imports:[
		RouterModule.forRoot(APP_ROUTES, {
			enableTracing: false
		})
	],
	exports: [
	    RouterModule
	  ]
})

export class AppRouting{
	
	constructor() {}
}