import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'bd-account-entries',
  templateUrl: './account-entries.component.html',
  styleUrls: ['./account-entries.component.css']
})
export class AccountEntriesComponent implements OnInit {

	
	constructor(private user: UserService) { }

	ngOnInit() {
	}

	public line_ChartData = [
        ['Month', 'Budget', 'Spending'],
        ['Jan', 2345, 4030],
        ['Feb', 3467, 2460],
        ['Mar', 4344, 2321],
        ['Apr', 2344, 5432],
        ['May', 7863, 3532],
        ['Jun', 3565, 5435]];

  public line_ChartOptions = {
	        chart: {
	          title: 'Last 6 months spending comparison',
	          subtitle: 'Your spending: £ 1737 | Avg peer spending: £ 2737'
	        },
	        colors: ['#004D40', '#EF6C00'],
	        width: '100%',
	        height: '300',
	        pointSize: 30,
	        animation: {
	          startup: true,
	          duration:250
	        },
	        legend: { position: 'none' },
	        backgroundColor:'red'
	        
	};

}
