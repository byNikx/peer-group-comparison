export class UserType{
	
	private type: string;
	private icon: string;
	constructor(type: string, icon: string) {
		this.type = type;
		this.icon = icon;
	}

	getType(): string{
		return this.type;
	}

	getIcon(): string {
		return this.icon;
	}
}