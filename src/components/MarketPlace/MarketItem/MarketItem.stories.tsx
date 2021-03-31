import React from "react";
import { Story, Meta } from "@storybook/react";
import { MarketItem } from "./MarketItem";
import { MarketItemVM } from "./MarketItemVM";

export default {
	title: "Components/MarketItem",
	component: MarketItem,
} as Meta;

const Template: Story = () => {
	const viewModel = new MarketItemVM("item1", "Item 1");
	return <MarketItem viewModel={viewModel} />;
};

export const MarketItemStory = Template.bind({});
