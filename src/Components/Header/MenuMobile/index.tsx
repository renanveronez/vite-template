import { useState } from 'react'
import NavLink from '../NavLink';
import { Container } from '../styles';
import { X } from 'phosphor-react'



function MenuMobile() {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <div>
        {/* <img src={fourleaf} alt="Four Leaf" className='fourleaf' /> */}
        <h1>Logo</h1>
      </div>

      <nav>
        <img className='barMenu' src='https://i.imgur.com/cmahuLK.png' onClick={showSidebar} alt='menu' />
        <div className={sidebar ? 'navMenuActive' : 'navMenu'}>
          <div className='listItems'>
            <ul>
              <NavLink title="Home" path="/" />
              <NavLink title="Second" path="/second" includes />
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default MenuMobile;
