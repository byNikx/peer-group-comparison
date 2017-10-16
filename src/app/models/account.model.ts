export class Account{
	

	private id: string;
	private viewValue: string;
	constructor(id: string, viewValue:string) {
		this.id = id;
		this.viewValue = viewValue;
	}

	getId():string{
		return this.id;
	}
	getViewValue(): string{
		return this.viewValue;
	}
}