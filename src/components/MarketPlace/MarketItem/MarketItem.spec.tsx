import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MarketItem } from "../MarketItem";
import { MarketItemVM } from "./MarketItemVM";

describe("01-MarketItem AC", () => {
	describe("Given: The page is rendered the first time", () => {
		describe("When: A MarketItem is rendered", () => {
			let viewModel: MarketItemVM;
			beforeEach(() => {
				viewModel = new MarketItemVM("item1", "Item 1");
				render(<MarketItem viewModel={viewModel} />);
			});

			test("The MarketItem checkbox is displayed", () => {
				const checkbox = screen.getByLabelText("Item 1");
				expect(checkbox.tagName).toBe("INPUT");
			});

			test("The MarketItem label is displayed", () => {
				const label = screen.getByText("Item 1");
				expect(label.tagName).toBe("LABEL");
			});

			test("MobX works", () => {
				const checkbox = screen.getByLabelText("Item 1");
				expect(viewModel.checked).toBe(false);
				userEvent.click(checkbox);
				expect(viewModel.checked).toBe(true);
			});
		});
	});
});
