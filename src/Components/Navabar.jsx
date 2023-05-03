import React from 'react'
// import Logo from '../assects/logoipsum-256.svg';
import Logoone from '../assects/Apple_logo.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
 function Navabar() {
  return (
    <div className='navabar'>
      <div className='leftSide'>
        <img className='logo' src={Logoone}/>
      </div> 
      <div className='rightSide'>
        <nav className='menu-list'>
        <ul className='list-item'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Service</a></li>
        <li><a href='#'>Contact</a></li>
        </ul>
        </nav>
      </div>
      <button className='btn-toggle'>
            <DehazeIcon />
        </button>
    </div>
  )
}

export default Navabar;
