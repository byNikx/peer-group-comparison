import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import {AccountService} from '../../services/account/account.service';
import { Spending } from '../../models/spending.model';
import {SpendingsService} from '../../services/spendings/spendings.service';
import { Subscription } from "rxjs/Subscription";
declare var google: any;


@Component({
  selector: 'bd-spending-over-time',
  templateUrl: './spending-over-time.component.html',
  styleUrls: ['./spending-over-time.component.scss']
})
export class SpendingOverTimeComponent implements OnInit {

	range: number = 1;
	accounts: Account[] = [];
	spendings: Spending[] = [];
	selectedValue = '0_account';
	spendingsWatcher: Subscription;
	constructor(private accountService: AccountService , private spendingService: SpendingsService) { 
		this.accounts = accountService.accounts;
//		this.spendings = spendingService.spendings;
		this.spendingsWatcher = spendingService
			.getSpendings().subscribe((spendings)=>{
				this.spendings = spendings;
				this.prepareDataForChart(this.spendings);
			});
	}

	prepareDataForChart(spendings){
	      
	    function onlyUnique(value, index, self) { 
	      return self.indexOf(value) === index;
	    }

	    function identifyCategories(spendings){
	      return spendings.map((v)=>{
	        return v.category;
	      });
	    }

	    let categories = identifyCategories(spendings).filter(onlyUnique);
	    console.log("categories", categories);





//	    let data = new google.visualization.DataTable();


	    
	    // data.addColumn('string', 'Month');
	    // data.addColumn('number', 'house');
	    // data.addColumn('number', 'transportation');
	  }

	// line_ChartData = new google.visualization.DataTable();
	// line_ChartData.addColumn()
	line_ChartData = [
		['Month', 'Home', 'Insurance', 'Food', 'Transportation', 'Education', 'Others'],
		['Jan', 2345, 4030, 6646, 1452, 2614, 624],
		['Feb', 3467, 2460, 3646, 2452, 1614, 261],
		['Mar', 4344, 2321, 4646, 5452, 5614, 276],
		['Apr', 2344, 5432, 8646, 3452, 4614, 911],
		['May', 7863, 3532, 5646, 6452, 7614, 7687],
		['Jun', 3565, 5435, 1646, 2452, 2614, 2675]
	];

	line_ChartOptions = {
	    chart: {
	      title: null,
	      subtitle: null
	    },
//	    colors: ['#004D40', '#EF6C00'],
	    width: '100%',
	    height: '300',
	    pointSize: 10,
	    animation: {
	      "startup": true,
	      duration:250
	    },
	    legend: { position: 'top' },
	    backgroundColor:'transparent'
	    
	};

	test1(){
		this.line_ChartData = [
			['Month', 'Home', 'Insurance', 'Food', 'Transportation', 'Education', 'Others'],
			['Jan', 2345, 4030, 6646, 1452, 2614, 624],
			['Feb', 3467, 2460, 3646, 2452, 1614, 261],
			['Mar', 4344, 2321, 4646, 5452, 5614, 276],
			['Apr', 2344, 5432, 1646, 3452, 4614, 911],
			['May', 4863, 3532, 5646, 6452, 2614, 2687],
			['Jun', 3565, 5435, 1646, 2452, 2614, 2675]
		];
	}
	test(){
//		alert('');
		//this.line_ChartOptions.chart.title = 'Hello World';
		this.line_ChartData = [['Month', 'Home', 'Insurance', 'Food', 'Transportation', 'Education', 'Others'],
		['Jan', 345, 100, 646, 252, 142, 224],
		['Feb', 267, 460, 246, 552, 314, 661],
		['Mar', 244, 321, 946, 252, 814, 276],
		['Apr', 544, 832, 346, 852, 314, 411],
		['May', 363, 132, 546, 252, 514, 287],
		['Jun', 565, 235, 246, 352, 214, 675]];

	}

	ngOnInit() {
	}

}
