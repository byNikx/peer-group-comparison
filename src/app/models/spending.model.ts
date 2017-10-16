export class Spending {

	private id: string;
	private month: number;
	private year: number;
	private category: string;
	private amount: number;

	constructor(id: string, month: number, year: number, category: string, amount: number) {
		this.month = month;
		this.id = id;
		this.year = year;
		this.category = category;
		this.amount = amount;
	}

	getId():string{
		return this.id;
	}
	
	getMonth():number{
		return this.month;
	}

	getYear():number{
		return this.year;
	}

	getCategory():string{
		return this.category;
	}

	getAmount():number{
		return this.amount;
	}

}
