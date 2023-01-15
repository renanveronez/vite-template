import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;

  .main{
    display: inline-flex;
  }

  .box {
    margin: 30px 0 20px 0;
    
    
    color: white;
    font-weight: 800;
    /* animation: aniload 3s; */
    
    @media (min-width: 320px) {
      font-size: 2.25em;
      padding: 5px;
    }

    @media (min-width: 480px) {
      font-size: 3.5em;
      padding: 20px;
    }

    @media (min-width: 768px) {
      font-size: 5em;
    }
    
  }

  #box1::after {
    content: "Tech";
    display:flex;
    transform:rotateX(180deg);
    background-image:
      linear-gradient(180deg,rgba(255,255,255,.0) 10%,rgba(255,255,255,.5));
    -webkit-background-clip: text;
    color: transparent;
  }

  #box2{
    color: rgb(37,116,236);
  }
  #box2::after {
    content: "Anarchy";
    display:flex;
    transform:rotateX(180deg);
    background-image:
      linear-gradient(180deg,rgba(37,116,236,.0) 10%,rgba(37,116,236,.5));
    -webkit-background-clip: text;
    color: transparent;
  }

  @keyframes aniload {
    from {
      transform: translate(-1000px, 0px)
    }
    to {
      transform: translate(0px, 0px)
    }
  }
`

// @media (max-width: 320px) { }
// @media (max-width: 480px) { }
// @media (max-width: 768px) { }
// @media (max-width: 992px) { }
// @media (max-width: 1200px) { }