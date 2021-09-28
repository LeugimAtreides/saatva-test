import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import ZenImage from "../images/zen-carousel.jpg";
import LoomImage from "../images/loom-carousel.jpg";
import ClassicCarousel from "../images/classic-carousel.jpg";
import { Transition } from "@tailwindui/react";
import classnames from "classnames";
import NumberFormat from "react-number-format";
import { noop } from "lodash";

export default function Mattress({ mattresses = {}, addToCart = noop }) {
  const [activeMattress, setActiveMattress] = useState(mattresses.classic);

  const findAndSetMattress = (e) => {
    e.preventDefault();
    const mattress = mattresses[e.target.value];
    setActiveMattress(mattress);
  };

  const getActiveImage = useCallback(() => {
    switch (activeMattress.name) {
      case "Saatva Classic":
        return ClassicCarousel;
      case "Loom & Leaf":
        return LoomImage;
      case "Zenhaven":
        return ZenImage;
      default:
        break;
    }
  }, [activeMattress]);

  const mattressSelectButton = (value, name) => {
    return (
      <button
        style={{
          minWidth: "11rem",
        }}
        className={classnames(
          "border-saatva-gray font-medium border-default font-saatva-base text-lg text-center p-1 transition duration-500 ease-in-out h-12 transform hover:bg-saatva-gray hover:text-saatva-white",
          {
            "text-saatva-gray bg-saatva-white": activeMattress.name !== name,
            "text-saatva-white bg-saatva-gray": activeMattress.name === name,
          }
        )}
        type="button"
        value={value}
        onClick={(e) => findAndSetMattress(e)}
      >
        {name}
      </button>
    );
  };

  return (
    <section className="w-screen flex flex-col lg:flex-row space-x-2 p-6 justify-evenly">
      <aside className="flex justify-center w-full lg:w-1/2 shadow-sm">
        <Transition
          show={true}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            className="object-fill object-center transition-all duration-500 ease-in-out"
            style={{
              minHeight: "11rem",
            }}
            alt={activeMattress.name}
            src={getActiveImage()}
          />
        </Transition>
      </aside>
      <aside className="w-full lg:w-1/3 flex flex-col justify-evenly space-y-3 p-2">
        <span className="fle flex-row justify-start">
          <p className="font-saatva-header text-2xl md:text-4xl font-medium">
            Choose Your Mattress
          </p>
        </span>
        <div className="flex flex-col space-y-1 justify-start">
          <span className="text-sm uppercase">select mattress type</span>
          <div className="w-full flex flex-col lg:flex-row">
            {mattressSelectButton("classic", "Saatva Classic")}
            {mattressSelectButton("loom", "Loom & Leaf")}
            {mattressSelectButton("zen", "Zenhaven")}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-lg font-saatva-base font-medium text-left">
            {activeMattress.name}
          </span>
          <span className="flex">
            <NumberFormat
              value={activeMattress.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              className="text-sm font-light text-center"
            />
          </span>
        </div>
        <div className="container flex">
          <button
            type="button"
            data-testid="add-to-cart"
            onClick={() => addToCart(activeMattress)}
            className="w-full cursor-pointer transition duration-500 ease-in-out h h-12 transform hover:translate-y-1 hover:scale-110 bg-saatva-yellow text-saatva-white"
          >
            Add To Cart
          </button>
        </div>
      </aside>
    </section>
  );
}

Mattress.propTypes = {
  mattresses: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    reviewRating: PropTypes.number,
    imageFileName: PropTypes.string,
  }),
  addToCart: PropTypes.func,
};
