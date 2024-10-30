import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import logo from "../images/self-logo.png";
import Link from "react-scroll/modules/components/Link";

function Navbar() {
  const navRef = useRef(null);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

  return (
    <header>
      <div className="divStyle">
        <img src={logo} alt="Logo" className="logoStyle" />
        <div className="logoName">
          <div className="logoName">SelfMade</div>
          <div className="logoName">Music</div>
        </div>

        <nav ref={navRef} className="navStyle">
          <a className="passive" href="/#">Ana Sayfa</a>
          <Link className="passive"
          href="/#"
          activeClass="active"
          to="altbolum"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}          
          >Eğitim</Link>
        </nav>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
      </div>
      

    </header>
  );
}

export default Navbar;

