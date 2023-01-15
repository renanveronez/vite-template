import styled from 'styled-components';
import Landscape from '../../../Assets/landscape.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EDF8FF;
  background:url(${Landscape}); 
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

// @media (max-width: 320px) { }
// @media (max-width: 480px) { }
// @media (max-width: 768px) { }
// @media (max-width: 992px) { }
// @media (max-width: 1200px) { }

  .leftTop {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 90%;
      padding: 0 0 1.5rem 0;
      margin: -5rem 1.5rem 0 1.5rem;
    }

    p {
      color: black;
      font-size: 9vw;

      @media (max-width: 768px) {
        font-size: 12vw;
        margin: 0 1.5rem 0 1.5rem;
      } 
    }
  }

  .rightBottom {
    display: flex;
    align-items: center;
    justify-content: center;
   
    @media (max-width: 768px) {
      width: 90%;
    }

    .box {
      width: 35vw;
      display: flex;
      flex-direction: column;
      padding: 2.5vw;

      /* glass effect */
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
      border-radius: 5px;
      background-color: rgba(255, 255, 255, .45);
      backdrop-filter: blur(5px);
      
      /* background-color: #EDF8FF; */
      border-radius: 10px;

      @media (max-width: 768px) {
        width: 100%;
        margin: 0 1.5rem 0 1.5rem;
        padding: 25px 30px 25px 30px;
      } 

      @media (max-width: 480px) { 
        margin: 0 .5rem 0 .5rem;
        padding: 20px 10px 20px 10px;
      }
      
      .subtitle {
        color: black;
        font-size: 2.5vw;
        font-weight: bolder;
        
        @media (max-width: 768px) {
          text-align: center;
          padding: 10px 10px 10px 10px;
          font-size: 1.25rem;
        }
        @media (max-width: 480px) {
          font-size: 1rem;
        }
      }
      .contentBox {
        color: black;
        font-size: 1.5vw;

        p {
          padding-top: 1.5vw;

          @media (max-width: 768px) {
            text-align: center;
            padding: 10px 0 0 5px;
            font-size: 0.95rem;
            line-height: 20px;
          }
          @media (max-width: 480px) {
            font-size: 0.9rem;
            line-height: 18px;
          }
        }
      }
    }
  }
`;