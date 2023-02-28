import React from 'react'
import HeaderHome from '../../Components/HeaderHome'
import './style.css'

export default function Home() {
  return (
    <div className='containerHome'>
        <HeaderHome />
        <div className="imgContentHome">
            <div className="contentTextHome">
                <h1 className="welcomeText">Hello! We are CVFÁCIL</h1>
                <h6 className="bemVindo">Welcome To Our PLataform.</h6>
                <div className="buttons">
                    <button className="myCv">My CV</button>
                    <button className="criar">Create Now</button>
                </div>
            </div>
        </div>
        <div className="footer"></div>
    </div>
  )
}
