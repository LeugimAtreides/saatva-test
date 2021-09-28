import PropTypes from "prop-types";
import AddToCart from "./AddToCart";

export default function Header({ itemCount }) {
  return (
    <header className="bg-saatva-white w-full px-10 flex flex-row justify-between border-b-2 border-gray-300 shadow-sm">
      <h1 data-testid="header" className="text-5xl font-saatva-header font-medium text-saatva-yellow lowercase">
        SAATVA
      </h1>
      <div className="flex flex-col justify-center">
        <AddToCart itemCount={itemCount} />
      </div>
    </header>
  );
}

Header.propTypes = {
  itemCount: PropTypes.number,
};
