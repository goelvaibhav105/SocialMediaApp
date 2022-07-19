import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LeftSearch.css'


const LeftSearch = () => {
  return (
    <div className="LeftSearch">
        <img src={Logo} alt="" />
        <div className="Search">
            <input type="text" placeholder='Checkout This' />
            <div className="s-icon">
              <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LeftSearch