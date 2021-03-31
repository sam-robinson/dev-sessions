import React from "react";
import { Checkbox } from "nrcs-design-system";
import { IMarketItemVM } from "./MarketItemVM";
import { observer } from "mobx-react";

export interface IMarketItemProps {
	viewModel: IMarketItemVM;
}

const MarketItemComponent = ({ viewModel }: IMarketItemProps) => (
	<div>
		<Checkbox
			id={`marketitem-${viewModel.id}`}
			label={viewModel.label}
			checked={viewModel.checked}
			onChange={viewModel.handleChange}
		/>
	</div>
);

export const MarketItem = observer(MarketItemComponent);
