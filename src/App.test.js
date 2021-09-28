import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

// Add to cart test
test("Adds an item to the cart", () => {
  render(<App />);
  const addToCartButton = screen.getByTestId("add-to-cart");
  fireEvent.click(addToCartButton);
  fireEvent.click(addToCartButton);
  fireEvent.click(addToCartButton);
  const badgeCount = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === "span" && content.includes("3");
  });
  expect(badgeCount.innerHTML).toEqual("3");
});
