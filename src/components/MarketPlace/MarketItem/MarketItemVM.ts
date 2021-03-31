import { action, observable } from "mobx";

export interface IMarketItemVM {
	id: number | string;
	label: string;
	checked: boolean;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class MarketItemVM implements IMarketItemVM {
	constructor(id: number | string, label: string) {
		this.id = id;
		this.label = label;
		this.checked = false;
	}

	id: number | string;
	label: string;

	@observable checked: boolean;

	@action.bound handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.checked = event.target.checked;
	}
}
