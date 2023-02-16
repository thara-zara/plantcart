import React from 'react'
import "./Foot.css"
import logo from "../../assets/logo.png"


const Foot = () => {
  return (
    <div className='foot'>
        <div className='footer'>
            <div className='visit'>
                <div className='logo-foot'>
                <img src={logo} alt="img"/>
                    My <br/> Plant
                    <p>i am happy with plants</p>
                </div>
            </div>
            <div className='visit'>
                <h1>visit links</h1>
                <h5>privacy</h5>
                <h5>terms and conditions</h5>
            </div>
            <div className='visit'>
                <h1>company</h1>
                <h5>home</h5>
                <h5>about</h5>
                <h5>contact us</h5>
            </div>
            <div className='visit'>
                <h1>contact</h1>
                <h5>+94 786565 565</h5>
                <h5>testforsms5689@gmail.com</h5>
            </div>
            <div className='visit'>
                <h1>address</h1>
                <h5>3rd lane <br/>
                main street <br/>
                colombo</h5>
            </div>
        </div>


        <div className='copyright'>
            <div className='copy-text'>
                @2022 my plant (react js development R.tharindu randeniya)
            </div>
            <div className='social'>
                <i className='fab fa-facebook'/>
                <i className='fab fa-instagram'/>
                <i className='fab fa-youtube'/>
            </div>
        </div>
    </div>
  )
}

export default Foot