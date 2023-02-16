import React from 'react'
import Nav from '../components/Nav/Nav'
import "./Home.css"
import hero from "../../src/assets/hero.jpg"
import latest from "../../src/assets/1.jpg"
import Button from '../components/Button/Button'
import f1 from "../../src/assets/delivery.svg"
import Cat from '../components/Category/Cat'
import Trend from '../components/Trend/Trend'
import pet from "../../src/assets/pet.jpg"
import best from "../../src/assets/best.jpg"
import Foot from '../components/Foot/Foot'
import Cart from '../components/Cart/Cart'
import { useState } from 'react';

const Home = ({handleClick}) => {
  return (
    <div className='container'>
  
        
        
      <div className='hero'>
        <div className='hero-left'>
            <img src={hero} alt="img"/>
            <div className='hero-text'>
              <h5>plant shop</h5>
              <h1>create <br/> your orban <br/> jungle</h1>
              <p>  It will be replaced with the URL of the `public` folder during the build.   
                It will be replaced with the URL of the `public` folder during the build.
              </p>
              <div className='button'>
                <div className='shop-now'>
                  <span> shop now</span>
                </div>
                <div className='watch'>
                  <span> watch our video</span>
                </div>
              </div>
            </div>
        </div>
        <div className='hero-right'>
            <div className='latest'>
              <div className='latest-top'>
                  <img src={latest} alt="img"/>
                  <h1>hoanar carnosa</h1>
                  <h5>accessories</h5>
                  <p>the hill mountain this plant very largest</p>
                  <div className='latest-btm'>
                    <Button
                    name="add to bucket"
                    />
                    $50
                  </div>
              </div>
            </div>
        </div>
      </div>

      <div className='features'>
          <div className='f-card'>
            <div className='f-img'>
            <i className="fa-sharp fa-solid fa-wallet"></i>
            </div>
            <div className='f-img'>
                <h2>fit to pocket</h2>
                <h3>capped 25$ per order</h3>
            </div>
          </div>
          <div className='f-card'>
            <div className='f-img'>
            <i className="fa-solid fa-money-bill"></i>
            </div>
            <div className='f-img'>
                <h2>secure payment</h2>
                <h3>capped 25$ per order</h3>
            </div>
          </div>
          <div className='f-card'>
            <div className='f-img'>
            <i className="fa-solid fa-truck-fast"></i>
            </div>
            <div className='f-img'>
                <h2>free shipping</h2>
                <h3>capped 25$ per order</h3>
            </div>
          </div>
          <div className='f-card'>
            <div className='f-img'>
            <i className="fa-solid fa-message"></i>
            </div>
            <div className='f-img'>
                <h2>chat support</h2>
                <h3>capped 25$ per order</h3>
            </div>
          </div>
      </div>
      {/*                                  categories                                */}
        <Cat/>
      {/*                                  trend                             */}
        <Trend handleClick={handleClick}/>

      <div className='tools'>
        <div className='tools-left'>
          <img src={best} alt="img"/>
          <div className='tool-text'>
            <h1>tools accessories for plants</h1>
          </div>
        </div>
        <div className='tools-right'>
          <img src={pet} alt="img"/>
          <div className='tool-text'>
          <h1>pets friendly plants</h1>
          </div>
        </div>
      </div>


      <div className='contact'>
        <img src={hero} alt="img"/>
        <div className='con'>
        <h1>be the first hear</h1>
        <p>signup for latest trends and get up to 35% off every order</p>
        
        <div className='email'>
            <input type="text" placeholder='your email here'/>
            <div className='s-button'>
              <Button
              name="submit"
              />
            </div>
        </div>
        </div>
      </div>

      <Foot/>
    </div>
  )
}

export default Home