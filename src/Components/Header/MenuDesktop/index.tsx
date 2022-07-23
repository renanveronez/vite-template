import { useState } from 'react'
// import { Container } from '../styles';
import NavLink from '../NavLink';
import { ContainerMobile } from './styles';

export function MenuDesktop() {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <ContainerMobile>
        <div className="headerContent">

          <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
            <div className="menuToggle">

              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <nav className="listItemsMobile">

              <ul className="menu">
                <li className="subItem">
                  <NavLink title="Home" path="/" />
                </li>

                <li className="subItem">
                  <NavLink title="Second" path="/second" />
                </li>
              </ul>

            </nav>

          </div>
        </div>
      </ContainerMobile>
    </>
  )
}