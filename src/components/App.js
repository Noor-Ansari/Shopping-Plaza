import React, {useState} from "react";
import Navbar from "./Navbar/Navbar";
import ItemCardBuilder from "./ItemCardBuilder/ItemCardBuilder";
import CartBuilder from "./CartBuilder/CartBuilder";
import {Context} from "./Context"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';


function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const history = createBrowserHistory()

  return (
    <Router history = {history}>
        <Context.Provider value={{cart:cart, setCart:setCart, quantity:quantity, setQuantity:setQuantity}}>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={ItemCardBuilder}/>
                    <Route exact path="/cart" component={CartBuilder}/>
                </Switch>
            </div>
        </Context.Provider>
    </Router>
  );
}

export default App;
