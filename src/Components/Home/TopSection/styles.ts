import styled from 'styled-components';
import Landscape from '../../../Assets/landscape.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EDF8FF;
  background:url(${Landscape}); 
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .left {
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      padding: 0 0 1rem 3rem;
    }

    p {
      color: black;
      font-size: 9vw;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 800px) {
      padding: 0 0 0rem 6rem;
    }

    .box {
      width: 35vw;
      display: flex;
      flex-direction: column;
      padding: 2.5vw;
      
      background-color: #EDF8FF;
      border-radius: 10px;
      
      .subtitle {
        color: black;
        font-size: 2.5vw;
        font-weight: bolder;
      }
      .content {
        color: black;
        font-size: 1.5vw;

        p {
          padding-top: 1.5vw;
        }
      }
    }
  }

`;

export const Content = styled.div`
  background:url(${Landscape}); 
`;

