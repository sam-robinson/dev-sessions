import { action, observable } from "mobx";

export class MarketItemVM {
	@observable checked: boolean = false;

	@action.bound
	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.checked = event.target.checked;
	}
}
