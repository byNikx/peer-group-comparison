import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { UserService } from '../../services/user/user.service';
import { UserType } from '../../models/user-type.model';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'bd-type-selection',
  templateUrl: './type-selection.component.html',
  styleUrls: ['./type-selection.component.scss']
})
export class TypeSelectionComponent implements OnInit {

  userTypes: UserType[];
  showNewTypes: boolean = false;
  selectedUserType: UserType;

  userTypeWatcher: Subscription;

	constructor(private layout: LayoutService, private user: UserService) { 
		this.userTypes = [
			new UserType('Student', 'student.png'),
			new UserType('Graduated', 'graduate.png'),
			new UserType('First Job', 'tie.png'),
			new UserType('Family', 'family.png')
		]

		this.userTypeWatcher = this.user.getUserType()
								  	.subscribe((type)=>{
								  		this.selectedUserType = type;
								  	});

	}

  toggleNewUserTypes(): void{
  	this.showNewTypes = !this.showNewTypes;
  };

  ngOnInit() {
  }

  ngOnDestroy(){
  	this.userTypeWatcher.unsubscribe();
  }

}
