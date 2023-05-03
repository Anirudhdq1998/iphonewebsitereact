import React from 'react'
import Appleone from '../assects/apple12.png';
import Appletwo from '../assects/Apple13.png';
import applesix from '../assects/applethree.png';
export default function About() {
  return (
    <div className='list container '>
      <h2 className='produc-head'>Our Smart Products</h2>
      <div className='items'>
      <div className='products '>
      <img className='apple' src={Appleone} alt='apple'/>
      <div className='product-name'>
       <p>iPhone 11 pro (6gb | 128gb)</p>
       <p>just <b>₹30,999/-</b></p>
      </div>
      </div>
      <div className='products'>
      <img className='apple' src={Appletwo} alt='aple'/>
      <div className='product-name'>
       <p>iPhone 11 pro (6gb | 128gb)</p>
       <p>just <b>₹35,999/-</b></p>
      </div>
      </div>
      <div className='products'>
      <img className='apple' src={applesix} alt='aple'/>
      <div className='product-name'>
       <p>iPhone 11 pro (6gb | 128gb)</p>
       <p>just <b>₹50,999/-</b></p>
      </div>
      </div>
      <div className='products'>
      <img className='apple' src={Appleone} alt='ale' />
      <div className='product-name'>
       <p>iPhone 11 pro (6gb | 128gb)</p>
       <p>just <b>₹40,999/-</b></p>
      </div>
      </div>
      </div>
    </div>
  )
}
