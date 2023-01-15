import { Container } from "./styles";

export function TopSection() {

  return (
    <Container>
      <div className="leftTop">
        <p>WELCOME</p>
      </div>

      <div className="rightBottom">
        <div className="box">
          <p className="subtitle">A virtual world for NFT collectors and creators.</p>
          <div className="contentBox">
            <p>To the crypto natives and the NFT lovers. To
              the punks, the apes and the degens.
              To the creators, the business builders,
              the gamers, the entertainers.
            </p>
            <p> Welcome to Pavia… this is your home.
              Let’s build this world together.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
