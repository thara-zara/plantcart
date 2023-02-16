import React from 'react';
import Button from '../Button/Button';
import Price from '../Price/Price';
import "./Trend.css";

const Trend = ({handleClick}) => {

  return (
    <div className='trend'>
        <div className='trend-head'>
            <h1>top trending products</h1>
            <Button
            name="shop plant"
            />
        </div>
        <div className='trend-body'>
            <Price handleClick={handleClick}/>
        </div>
    </div>
  )
}

export default Trend