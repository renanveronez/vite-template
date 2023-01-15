import { Mirror } from "../../Mirror";
import { Container } from "./styles";

export function SecondSection() {

  return (
    <>
      <Container>
        <div className="container">
          <div className="box">
            <p className="title">Smart security for your spaces</p>
            <p className="subtitle">Seamless access and real-time data and analytics transform your spaces into secure and streamlined resources.
            </p>
          </div>
        </div>
      </Container>
      <Mirror />
    </>
  )
}
