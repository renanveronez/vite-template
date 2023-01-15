import styled from 'styled-components';
import Landscape from '../../../Assets/landscape.jpg';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  
  background: rgb(31,31,31);
  background: linear-gradient(180deg, rgba(31,31,31,0.95) 5%, rgba(0,0,0,1) 50%, rgba(31,31,31,1) 95%);
  display: flex;

@media (min-width: 320px) { 
  flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* .container {
  display: flex;
  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
}

.container:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  filter: blur(10px);
  margin: -20px;
} */

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 320px) { 
    margin: 0 2rem;
  }
}



.title {
  font-weight: bolder;
  font-style: normal;
  font-size: 3rem;
  padding-bottom: 25px;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  color: #fff;
  margin: 0;
  transition: all .2s ease-out;
  transition-property: color;
  line-height: calc(.86135em + 12.3249px);

  @media (min-width: 320px) {
    font-size: 2rem;
   }

  @media (min-width: 480px) {
   font-size: 2.5rem;
  }

  @media (min-width: 768px) {
   font-size: 2.8rem;
  }
  @media (min-width: 992px) {
   font-size: 3rem;
  }
}

.subtitle {
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  color: #dbdce1;
  letter-spacing: .01em;
  line-height: 1.6em!important;

  @media (min-width: 320px) {
    font-size: 1.35rem;
   }
  @media (min-width: 480px) {
    font-size: 1.65rem;
   }

   @media (min-width: 768px) {
    font-size: 1.85rem;
   }
}

// @media (min-width: 320px) { }
// @media (min-width: 480px) { }
// @media (min-width: 768px) { }
// @media (min-width: 992px) { }
// @media (min-width: 1200px) { }
    
`;