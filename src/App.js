import { useState } from "react";
import Price from "./components/Price/Price";
import Home from "./Pages/Home";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Foot from "./components/Foot/Foot";

function App() {

  const [show, setShowbascket] = useState(true);
  const [cart, setCart]= useState([])


  const handleClick = (item) =>{
      let Present=false;
      cart.forEach((product)=>{
        if(item.id === product.id)
        Present=true;
      })
        if (Present)
        return;
        setCart([...cart, item]);
        //console.log(item);
}


  const updateAmount = (items, d)=>{
      ///console.log(items, d);
  }


  return (
    <div className="App">
        <Nav setShowbascket={setShowbascket} size={cart.length}/>
        {show ? 
        <Home handleClick={handleClick} /> 
        :
        <Cart cart={cart} setCart={setCart}  updateAmount={updateAmount}/>}  
    </div>
  );
}

export default App;