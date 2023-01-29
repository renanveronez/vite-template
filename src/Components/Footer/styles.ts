import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* position: absolute; */
  width: 100%;
  bottom: 0;
  align-items: center;
  background: ${({ theme }) => theme.colors["footerBackgroundStart"]};

  .containerStart {
    width: 650px;
    display: flex;
    padding: 0.5rem 0 0.5rem 0;
    margin: auto;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
    }

    .boxStart{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;

      @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

      .column {
        padding: 1rem 0rem;

        p {
          color: black;
          padding: 0.5rem;
          text-align: center;
        }
        p:first-child {
          font-size: 1.10rem;
          font-weight: bold;
          text-transform: uppercase;
          padding-bottom: 1rem;
        }
      }
    }
  }

  .socialMedia {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 0.5rem 0rem 2rem 0;

    .boxSocialMedia {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }

    img {
      width: 30px;
    }
  }


  .containerEnd {
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding: 1rem 0rem;
    
    background: ${({ theme }) => theme.colors["footerBackgroundEnd"]};
    border-top: 1px solid #D6D6D6;

    .boxEnd {
      p {
        color: #000;
        font-size: 0.95rem;
        @media (max-width: 480px) {
          font-size: 0.85rem;
        }
        @media (max-width: 380px) {
          font-size: 0.7rem;
        }
      }
    }
  }
  `

  // @media (max-width: 320px) { }

// @media (max-width: 768px) { }
// @media (max-width: 992px) { }
// @media (max-width: 1200px) { }