import { Injectable } from '@angular/core';
import { Account } from '../../models/account.model';

@Injectable()
export class AccountService {
	accounts: Account[] = [];

	constructor() { 
		let data = [
			'Checking Account 8787-3434301',
			'Saving Account 8787-3434327',
			'Budget Account 8787-3609242',
			'Pension Account 8787-6372199'
		];
		data.forEach((account, i)=>{
			this.accounts.push(new Account(i+'_account', account));
		});

		
	}

	
}
