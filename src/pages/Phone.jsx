import React from 'react'
import AppleThree from '../assects/applephone.jpg';
export default function phone() {
  return (
    <div className='card'>
      <div>
      <h1 className='head-one'>i Phone 12 pro</h1>
      </div>
      <div className='sec-head'>
          <div className='hed-text'>
          <h2>MagSafe</h2>
          <p>Snap on a magnetic case,wallet,<br/>
            or both. And get faster<br/>
            wireless charging.<br/></p>
          </div>
          <div className='img-div'>
            <img className='img-size' src={AppleThree} alt="main" />
          </div>
      </div>
    </div>
  )
}
