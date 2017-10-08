import { Injectable } from '@angular/core';
import { UserType } from '../../models/user-type.model';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {

  
	eligibleToSeeNotification: boolean = true;
	userType: BehaviorSubject<UserType> = new BehaviorSubject<UserType>(null);
	constructor() { }

	isEligibleToSeeNotification(){
		return this.eligibleToSeeNotification;
	}

	setNotificationEligibility(eligibility){
		this.eligibleToSeeNotification = eligibility;
	}

	getUserType(): BehaviorSubject<UserType>{
		return this.userType;
	}

	setUserType(userType: UserType): void{
		this.userType.next(userType);
	}

}
