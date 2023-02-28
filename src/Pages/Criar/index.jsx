import React, { useState } from 'react'
import HeaderHome from '../../Components/HeaderHome'
import './style.css'

export default function Criar() {
  const [show, setShow] = useState(false);
  return (
    <div className='containerCriar'>
        <HeaderHome />
        <div className="section">
          <div className="states">
            <li className="itemStates dados">Data</li>
            <li className="itemStates">Experience</li>
            <li className="itemStates">Formation</li>
            <li className="itemStates">Certification</li>
            <li className="itemStates">Style</li>
          </div>
          {show && (
            <div className="firstForm">
              <div className="dadosPessoais">Personal data</div>
              <div className="dadosContents">
                <div className="name">
                  <input type="text" placeholder='Fullname' className="fullNameInput" />
                  <input type="text" placeholder='Formation Area' className="areaDeForma" />
                </div>
                <div className="contacts">
                  <input type="text" className="linkedin" placeholder='Linkedin' />
                  <input type="text" className="linkedin" placeholder='Email' />
                  <input type="text" className="linkedin" placeholder='celular' />
                  <input type="text" className="linkedin" placeholder='Facebook' />
                  <input type="text" className="linkedin" placeholder='Github' />
                  <input type="text" className="linkedin" placeholder='Portifolio' />
                </div>
                <div className="skills">
                  <div className="contentSkills">
                    <input type="text" className="skillText"  placeholder='Add Skill' />
                    <button className="skillDelite">Remove</button>
                  </div>
                  <div className="buttonsSkills">
                    <button className="skill">ADD More Skill</button>
                    <button className="skillNext">Next</button>
                  </div>
                </div>
              </div>
            </div>

          )}
          {!show && (
            <div className="firstForm">
              <div className="dadosPessoais">Work Experience</div>
              <div className="dadosContents">
                <div className="skills">
                  <div className="contentSkills">
                    <input type="text" className="skillText"  placeholder='Add Experience' />
                    <input type="date" className="skillText marginSkill"  placeholder='Date-Start' />
                    <input type="date" className="skillText"  placeholder='Date-End' />
                    <button className="skillDelite">Remove</button>
                  </div>
                  <div className="buttonsSkills">
                    <button className="skill">ADD More Experience</button>
                    <button className="skillNext">Next</button>
                  </div>
                </div>
              </div>
            </div>

          )}
          {show && (
            <div className="firstForm">
              <div className="dadosPessoais">Formation</div>
              <div className="dadosContents">
                <div className="skills">
                  <div className="contentSkills">
                    <input type="text" className="skillText"  placeholder='Add Formation' />
                    <input type="text" className="skillText marginSkillLeft"  placeholder='Add university' />
                    <input type="date" className="skillText marginSkill"  placeholder='Date-Start' />
                    <input type="date" className="skillText"  placeholder='Date-End' />
                    <button className="skillDelite">Remove</button>
                  </div>
                  <div className="buttonsSkills">
                    <button className="skill">ADD More Formation</button>
                    <button className="skillNext">Next</button>
                  </div>
                </div>
              </div>
            </div>

          )}
          {show && (
            <div className="firstForm">
              <div className="dadosPessoais">Certification</div>
              <div className="dadosContents">
                <div className="skills">
                  <div className="contentSkills">
                    <input type="text" className="skillText"  placeholder='Add Certification' />
                    <button className="skillDelite">Remove</button>
                  </div>
                  <div className="buttonsSkills">
                    <button className="skill">ADD More Certification</button>
                    <button className="skillNext">Next</button>
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>
    </div>
  )
}
