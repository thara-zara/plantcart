import React, { useEffect, useState } from 'react'
import "./Cart.css";
import img6 from "../../assets/6.jpg"
import Foot from '../Foot/Foot';

const Cart = ({cart,setCart,updateAmount}) => {
  const [price, setPrice] = useState(0);
  const [sPrice,setSprice] =useState("");

//////////////////////////////////////////////////////
  const updatePrice= () =>{
        let total=0;
        cart.map((items)=>{
          total+=1*items.price*items.amount
        })
        setPrice(total);
  }
  useEffect(()=>{
    updatePrice();
  })
///////////////////////////////////////////////////
/*const singlePrice= () =>{
  let total=0;
  cart.map((items)=>{
    total=items.price*items.amount
  })
  setSprice(total);
}
useEffect(()=>{
  singlePrice();
})
*/

  /////////////////////////////////////////////////


  const removeCart = (id)=>{
    const cartItems = cart.filter((items)=>items.id !== id);
    setCart(cartItems);
    //removeCart();
  }

////////////////////////////////////////////////////////
  return (
    <>
    <div className='cart'>
      <div className='cart-body'>
      {
        cart.map((items,index)=>{
          return(
            <div className='cart-items' key={index}>
              <div className='c-img'>
                  <img src={items.img} alt=""/>
                  <div className='c-name'>
                    <p>{items.name}</p>
                  </div>
              </div>
              <div className='c-qty'>
                    <button onClick={()=> {const carts = cart.map((item,indexs) => {
                      return index === indexs ?{...item,amount:items.amount+1}:item
                    })
                    setCart(carts);
                    }}>+</button>
                    <button className='amount'>{items.amount}</button>
                    <button onClick={()=> {const carts = cart.map((item,indexs) => {
                      if (items.amount > 1){
                        return index === indexs ?{...item,amount:items.amount-1}:item
                      }
                      else{
                        return index === indexs ?{...item,amount:items.amount}:item
                    }
                    })
                    setCart(carts);
                    }}>-</button>
              </div>
              <div className='c-price'>
                  <span>${items.amount * items.price}</span>
              </div>
              <div className='c-remove'>
                    <button onClick={()=>removeCart(items.id)}>
                    <i className="fas fa-trash"/>
                    </button>
              </div>
            </div>
          )
        })}

        <div className='sum'>
          <div className='total'>
              hey your total is <span>${price}</span>
          </div>
          <div className='check'>
            <span>checkout</span>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Cart
