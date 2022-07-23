import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const ContainerMobile = styled.header`

  .listItemsMobile {
   display: none;
  }


  .listItemsMobile {
    display: flex;
    flex-direction: column;
    margin: 0 0rem 0 0;

    > ul {
      flex-direction: column;
      line-height: 0px;
      font-weight: 700;
      align-items: center;
      justify-content: center;
      display: flex;
      padding-left: 0rem;
      text-align: left;

      height: auto;
      gap: 3.5rem;


      > li {
        height: 0.5rem;

        @media (max-width: 500px) {
          height: 0rem;
        }
      }
    }
  }

.one,
.two,
.three {
  background-color: var(--menu-blue);
  height: 5px;
  width: 100%;
  margin: 6px auto;
  transition-duration: 0.3s;

  @media (max-width: 450px) {
    height: 3px;
    width: 100%;
    margin: 6.5px 0px 0px 15px;
    padding: 2px 0px 2px 0px;

  }
}

.menuToggle {
  width: 40px;
  height: 30px;
  margin-right: 20px;
}

/*Fullscreen*/
.menuSectionOn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  // backdrop-filter: blur(20px);
  opacity: 0.95;
  z-index: 1;
  /*camada acima, evitar o scrool dos itens a baixo*/
  display: flex;
  justify-content: center;
  // align-items: center;
  padding-top: 6rem;
}

.menuSectionOn nav {
  display: block;
}


.menuSectionOn .menuToggle {
  position: absolute;
  right: 25px;
  top: 25px;

  // @media (max-width: 450px) {
  //   right: 10px;
  //   top: 15px;
  // }
}


.menuSectionOn .menuToggle .one {
  transform: rotate(45deg) translate(7px, 7px);
  background-color: rgb(255, 255, 255);
}

.menuSectionOn .menuToggle .two {
  opacity: 0;
}

.menuSectionOn .menuToggle .three {
  transform: rotate(-45deg) translate(8px, -9px);
  background-color: rgb(255, 255, 255);
}
`