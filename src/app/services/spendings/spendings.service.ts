import { Injectable } from '@angular/core';
import { Spending } from '../../models/spending.model';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SpendingsService {
	spendings = new BehaviorSubject<Spending[]>([]);

  constructor() {

		let data = [
			{ month: 1, year: 17, category: 'house', amount: 2392 } ,
			{ month: 1, year: 17, category: 'transportation', amount: 392 } ,
			{ month: 2, year: 17, category: 'house', amount: 5392 } ,
			{ month: 2, year: 17, category: 'transportation', amount: 555 } ,
			{ month: 3, year: 17, category: 'house', amount: 1392 } ,
			{ month: 3, year: 17, category: 'transportation', amount: 292 } ,
			{ month: 4, year: 17, category: 'house', amount: 2392 } ,
			{ month: 4, year: 17, category: 'transportation', amount: 292 } ,
			{ month: 5, year: 17, category: 'house', amount: 2392 } ,
			{ month: 5, year: 17, category: 'transportation', amount: 492 } ,
			{ month: 6, year: 17, category: 'house', amount: 2392 } ,
			{ month: 6, year: 17, category: 'transportation', amount: 234 } ,
			{ month: 7, year: 17, category: 'house', amount: 5392 } ,
			{ month: 7, year: 17, category: 'transportation', amount: 333 } ,
			{ month: 8, year: 17, category: 'house', amount: 2392 } ,
			{ month: 8, year: 17, category: 'transportation', amount: 155 } ,
			{ month: 9, year: 17, category: 'house', amount: 2392 } ,
			{ month: 9, year: 17, category: 'transportation', amount: 123 } ,
			{ month: 10, year: 17, category: 'house', amount: 2392 } ,
			{ month: 10, year: 17, category: 'transportation', amount: 324 } ,
			{ month: 11, year: 17, category: 'house', amount: 2392 } ,
			{ month: 11, year: 17, category: 'transportation', amount: 444 } ,
			{ month: 12, year: 17, category: 'house', amount:  1392 }, 
			{ month: 12, year: 17, category: 'transportation', amount: 111 } 
			
		];
		let dummyData = [];
		data.forEach((spending, i)=>{
			dummyData.push(new Spending(i+'_spending', spending.month, spending.year, spending.category, spending.amount));
		});
		this.spendings.next(dummyData);


}
	getSpendings(): BehaviorSubject<Spending[]>{
		return this.spendings;
	}
}
