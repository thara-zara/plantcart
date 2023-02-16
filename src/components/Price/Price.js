import React, { useState } from 'react';
import PriceData from "./PriceData";
import PriceItem from "./PriceItem"
import "./Price.css"

const Price = ({handleClick}) => {

    return(
      PriceData.map((item, index)=>{
        const {id,img,name,price,sub}=item
        return(
          <div className="price-card-details" key={index}>
            <div className="img"> 
                <img src={item.img}  alt="img"/>
            </div>
            <div className="name">
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
            </div>
            <h3>{item.sub}</h3>
           <button onClick={() => handleClick(item)}>add to bucket</button>
        </div>
        )
      })
    )
}

export default Price
