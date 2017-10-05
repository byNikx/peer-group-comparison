import { Component } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private layout: LayoutService){

  }
	links = [
  	{
  		label: 'Home',
  		icon: 'home',
  		url: 'home'
  	},{
  		label: 'Transactions',
  		icon: 'list',
  		url: 'transactions'
  	},{
  		label: 'Budget',
  		icon: 'monetization_on',
  		url: 'budget'
  	},{
  		label: 'Life Goals',
  		icon: 'grade',
  		url: 'life-goals'
  	}
  ]

  settings = [
  	{
  		label: 'Account',
  		icon: 'account_box',
  		url: 'settings/account'
  	},{
  		label: 'Payee List',
  		icon: 'list',
  		url: 'payee-list'
  	}
  ]

}
