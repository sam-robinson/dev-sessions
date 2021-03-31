import React from "react";
import { Checkbox } from "nrcs-design-system";
import { MarketItemVM } from "./MarketItemVM";
import { observer } from "mobx-react";

export interface IMarketItemProps {
	viewModel: MarketItemVM;
}

const MarketItemComponent = ({ viewModel }: IMarketItemProps) => {
	return (
		<Checkbox
			id="market-item-1"
			label="test-item-1"
			checked={viewModel.checked}
			onChange={viewModel.handleChange}
		/>
	);
};

export const MarketItem = observer(MarketItemComponent);
