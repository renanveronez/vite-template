import { FooterContainer } from "./styles";
import Instagram from '../../Assets/Instagram.svg';
import Facebook from '../../Assets/Facebook.svg';
import Twitter from '../../Assets/Twitter.svg';


export function Footer() {
  return (
    <FooterContainer>
      <div className="containerStart">

        <div className="boxStart">
          <div className="column">
            <div>
              <p>Company</p>
              <p>Address: XX Main Road</p>
            </div>
          </div>
          <div className="column">
            <div>
              <p>Products</p>
              <p>Product A</p>
              <p>Product B</p>
            </div>
          </div>
          <div className="column">
            <div>
              <p>Contact</p>
              <p>Email: emailteste@company.ie</p>
              <p>Phone: +353 XXXXXXXXXX</p>
            </div>
          </div>
        </div>

      </div>
      <div className="socialMedia">
        <div className="boxSocialMedia">
          <span>
            <a
              href=""
              target="_blank"
              title="Visit our Social Media"
            >
              <img src={Twitter} alt="Social Media" />
            </a>
          </span>
          <span>
            <a
              href=""
              target="_blank"
              title="Visit our Social Media"
            >
              <img src={Instagram} alt="Social Media" />
            </a>
          </span>
          <span>
            <a
              href=""
              target="_blank"
              title="Visit our Social Media"
            >
              <img src={Facebook} alt="Social Media" />
            </a>
          </span>
        </div>

      </div>



      <div className="containerEnd">
        <div className="boxEnd">
          <p>
            &copy; 2023 Name-Brand. All rights reserved.
          </p>
        </div>
        <div className="boxEnd">
          <p>
            Made by RVD.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}
