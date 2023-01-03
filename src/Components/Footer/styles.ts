import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  align-items: center;
  background: ${({ theme }) => theme.colors["footerBackgroundStart"]};

  .containerStart {
    /* width: 1100px; */
    display: flex;
    padding: 1rem 0 2.5rem 0;
    margin: auto;
    justify-content: center;

    .boxStart{
      width: 100%;
      display: flex;
      justify-content: center;

      .column {
        padding: 1rem 4rem;

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
    justify-content: space-around;
    margin: auto;
    padding: 0.5rem 2rem 1.5rem 0;

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
      }
    }
  }
  `