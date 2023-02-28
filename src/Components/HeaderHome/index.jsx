import React from 'react'
import './style.css'

export default function HeaderHome() {
  return (
    <div className='containerHeaderHome'>
        <img src="./menu.png" alt="" className="headerimgHome" />
        <div className="menu">
            <li className="itemHome">Home</li>
            <li className="itemHome">About</li>
            <li className="itemHome">Services</li>
            <li className="itemHome">Contacts</li>
        </div>
    </div>
  )
}
