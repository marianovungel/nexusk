import React from 'react'
import Header from '../../Components/Header'
import './style.css'

export default function Login() {
  return (
    <div className='conteiner'>
      <div className="contentLogo">
        <img src="./logoApp.png" alt="#" className="logoApp" />
      </div>
      <div className="contentForm">
        <header className="header">
          <Header />
        </header>
        <div className="textLoglt">
          <h1 className="textBig">Welcome!</h1>
          <p className="paragrafro">
            Aproveite, e crie com o CVFÁCIL a sua galeria de currículos vitaes
            com fins diferentes e esteja sempre preparado para os apresenta-lo
            em oportunidade de emprego &#9989.
          </p>
        </div>
        <div className='LoginFormMidia'>
          <div className="form">
            <h4 className="loginLabel">Login</h4>
            <div className="google">
              <img src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png" alt="" className="logoGoogle" />
            </div>
            <div className="facebook">
              <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" className="logoFacebook" />
            </div>
            <div className="termo">
              <div className="traco">
                <div className="tracoLeft"></div>
                <div className="tracoText">OR</div>
                <div className="tracoRight"></div>
              </div>
              <div className="termoLink">
                <small className='termoColor'>Termo</small>
                <span>&</span>
                <small className='termoColor'>Políticas de uso.</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
