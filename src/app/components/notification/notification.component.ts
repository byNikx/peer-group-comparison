import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bd-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

	visible: boolean = true;

	constructor() { }

	ngOnInit() {
	}

	toggleVisibility(){
		this.visible = !this.visible;
	}

}
