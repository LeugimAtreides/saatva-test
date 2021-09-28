import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Mattress from "./components/Mattress";
import mattressObject from "./mattresses.json";
import "tailwindcss/tailwind.css";

function App() {
  const [userCart, setUserCart] = useState([]);

  const { mattresses } = mattressObject;

  const addToCart = (mattress) => {
    setUserCart((activeCart) => [mattress, ...activeCart]);
  };

  return (
    <main className="w-screen h-screen inset-9 flex flex-col bg-saatva-whiteSmoke">
      <Header itemCount={userCart.length} />
      <Mattress mattresses={mattresses} addToCart={addToCart} />
    </main>
  );
}

export default App;
