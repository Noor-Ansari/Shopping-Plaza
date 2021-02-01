import React, {useState} from "react";
import Navbar from "./Navbar/Navbar";
import ItemCardBuilder from "./ItemCardBuilder/ItemCardBuilder";
import CartBuilder from "./CartBuilder/CartBuilder";
import {Context} from "./Context"

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("product");
  const [quantity, setQuantity] = useState(1);
  return (
    <Context.Provider value={{cart:cart, setCart:setCart, page:page, setPage:setPage, quantity:quantity, setQuantity:setQuantity}}>
      <div className="App">
          <Navbar/>
          {page==="product"?(
          <ItemCardBuilder />)
          :(
          <CartBuilder/>)
          }
      </div>
    </Context.Provider>
  );
}

export default App;
