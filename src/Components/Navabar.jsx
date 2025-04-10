
import React, {useState} from "react";
// import Logo from '../assects/logoipsum-256.svg';
import Logoone from '../assects/Apple_logo.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
 function Navabar() {
  const [openLinks, setOpenLinks ] = useState(false);
  const toggleNavbar = () => {
        setOpenLinks(!openLinks);
  }
  return (
    <div className='navabar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img className='logo' src={Logoone}/>
        <div className='hiddenLisr'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Service</a></li>
        <li><a href='#'>Contact</a></li>
        </div>
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
      <button onClick={toggleNavbar} className='btn-toggle'>
            <DehazeIcon />
        </button>
    </div>
  )
}

export default Navabar;
