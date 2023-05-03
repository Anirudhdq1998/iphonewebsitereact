import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <button className='icons-int'>
        <FacebookIcon/>
        </button>
        <button className='icons-int'>
        <InstagramIcon/>
        </button>
        <button className='icons-int'>
        <LocalPostOfficeIcon/>
        </button>
      </div>
      <div>
        <div className='para'>
          <p className='text-color'>© Copyright 2023  Apple INC.  All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
