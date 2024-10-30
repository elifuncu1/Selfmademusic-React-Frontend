import { useRef,useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import img3 from "../images/e2.jpg";
import img3hover from "../images/e1.jpg"
import img4 from "../images/e4.jpg";
import img4hover from "../images/e3.jpg"
import img5 from "../images/e6.jpg";
import img5hover from "../images/e5.jpg"
import img6 from "../images/e8.jpg";
import img6hover from "../images/e7.jpg"
import img7 from "../images/e10.jpg";
import img7hover from "../images/e9.jpg"

function Edu() {
  const navRef = useRef(null);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);

  const handleHover1 = () => {
    setHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setHovered1(false);
  };

  const handleHover2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const handleHover3 = () => {
    setHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
  };

  const handleHover4 = () => {
    setHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setHovered4(false);
  };

  const handleHover5 = () => {
    setHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setHovered5(false);
  };

  

  const photos = [
    { imageUrl: img3, alt: '1han',overlaySrc: img3hover },
    { imageUrl: img4, alt: 'Başlık 2',overlaySrc: img4hover  },
    { imageUrl: img5, alt: 'Başlık 3',overlaySrc: img5hover  },
    { imageUrl: img6, alt: 'Başlık 4',overlaySrc: img6hover  },
    { imageUrl: img7, alt: 'Başlık 5',overlaySrc: img7hover  },
  ];
  const Photo = ({ src, alt, overlaySrc }) => {
      return(
        <img
        className="w-92 h-92 object-cover"
        overlaySrc={img3hover}
        alt="Sample Image 1"
      />

      );
  };

  return (
    <div id="altbolum" style={{ height: "2800px", backgroundColor: "#161616" }}>
    
  <div className="flex lg:justify-start lg:items-end lg:mb-0 justify-center md:items-center h-32  text-white text-4xl font-bold lg:pl-60 lg:pt-30 mb-12 pt-12" style={{color: '#ffba00'}}>
    Eğitim
  </div>
  <div className="flex flex-col items-center justify-center">
    <div className="grid lg:grid-cols-2 lg:mt-12 lg:pb-64 gap-24 sm:grid-cols-1 md:mt-12 mt-auto">
    
      
      <div className=" rounded-lg overflow-hidden">
      <a
          href="https://www.instagram.com/dj1han"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img
        className={`w-72 h-72 object-cover hover:w-72 hover:h-72 duration-300 ease-in-out rounded-md  ${
          hovered1 ? "absolute z-10" : ""
        }`}
        src={hovered1 ? img3hover : img3}
        alt="Sample Image 1"
        onMouseEnter={handleHover1}
        onMouseLeave={handleMouseLeave1}
        style={{
          transform: `scale(${hovered1 ? 1.3 : 1})`,
        }}
        />
        <h2 className="text-white font-bold text-xl mt-6">1han</h2>
        </a>
      </div>
      <div className=" rounded-lg overflow-hidden">
      <a
          href="https://www.instagram.com/auxibeatz"
          target="_blank"
          rel="noopener noreferrer"
        >
      <img
        className={`w-72 h-72 object-cover hover:w-72 hover:h-72 duration-300 ease-in-out rounded-md ${
          hovered2 ? "absolute z-10" : ""
        }`}
        src={hovered2 ? img4hover : img4}
        alt="Sample Image 1"
        onMouseEnter={handleHover2}
        onMouseLeave={handleMouseLeave2}
        style={{
          transform: `scale(${hovered2 ? 1.3 : 1})`,
        }}
        />
        <h2 className="text-white font-bold text-xl  mt-6">Auxibeatz</h2>
        </a>
      </div>
      <div className=" rounded-lg overflow-hidden">
      <a
          href="https://www.instagram.com/atepilla"
          target="_blank"
          rel="noopener noreferrer"
        >
      <img
        className={`w-72 h-72 object-cover hover:w-72 hover:h-72 duration-300 ease-in-out rounded-md  ${
          hovered3 ? "absolute z-10" : ""
        }`}
        src={hovered3 ? img5hover : img5}
        alt="Sample Image 1"
        onMouseEnter={handleHover3}
        onMouseLeave={handleMouseLeave3}
        style={{
          transform: `scale(${hovered3 ? 1.3 : 1})`,
        }}
        />
        <h2 className="text-white font-bold text-xl mt-6">ATE</h2>
        </a>
      </div>
      <div className="rounded-lg overflow-hidden">
      <a
          href="https://www.instagram.com/emresakarli"
          target="_blank"
          rel="noopener noreferrer"
        >
      <img
        className={`w-72 h-72 object-cover hover:w-72 hover:h-72 duration-300 ease-in-out rounded-md  ${
          hovered4 ? "absolute z-10" : ""
        }`}
        src={hovered4 ? img6hover : img6}
        alt="Sample Image 1"
        onMouseEnter={handleHover4}
        onMouseLeave={handleMouseLeave4}
        style={{
          transform: `scale(${hovered4 ? 1.3 : 1})`,
        }}
        />
        <h2 className="text-white font-bold text-xl mt-6">Emre Sakarlı</h2>
        </a>
      </div>
      <div className="rounded-lg overflow-hidden">
      <a
          href="https://www.instagram.com/djbig.g"
          target="_blank"
          rel="noopener noreferrer"
        >
      <img
        className={`w-72 h-72 object-cover hover:w-72 hover:h-72 duration-300 ease-in-out rounded-md  ${
          hovered5 ? "absolute z-10" : ""
        }`}
        src={hovered5 ? img7hover : img7}
        alt="Sample Image 1"
        onMouseEnter={handleHover5}
        onMouseLeave={handleMouseLeave5}
        style={{
          transform: `scale(${hovered5 ? 1.3 : 1})`,
        }}
        />
        <h2 className="text-white font-bold text-xl mt-6">DJ BİG J</h2>
        </a>
      </div>
      
    </div>
  </div>
</div>

  );
}

export default Edu;
