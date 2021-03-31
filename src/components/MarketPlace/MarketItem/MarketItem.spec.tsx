import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MarketItem } from "./MarketItem";
import { MarketItemVM } from "./MarketItemVM";

describe("01-MarketItem rendering", () => {
	describe("Given: The page is rendered the first time", () => {
		let viewModel: MarketItemVM;
		beforeEach(() => {
			viewModel = new MarketItemVM();
			render(<MarketItem viewModel={viewModel} />);
		});
		describe("When: A MarketItem is rendered", () => {
			test("The MarketItem checkbox is displayed", () => {
				const el = screen.getByLabelText("test-item-1");
				expect(el.tagName).toBe("INPUT");
			});
			test("The MarketItem label is displayed", () => {
				const el = screen.getByText("test-item-1");
				expect(el.tagName).toBe("LABEL");
			});
		});
		describe("When: The checkbox is clicked", () => {
			test("The viewmodel starts with checked=false", () => {
				expect(viewModel.checked).toBe(false);
			});
			test("The viewmodel is updated", () => {
				const el = screen.getByLabelText("test-item-1");
				expect(viewModel.checked).toBe(false);
				userEvent.click(el);
				expect(viewModel.checked).toBe(true);
			});
		});
	});
});
