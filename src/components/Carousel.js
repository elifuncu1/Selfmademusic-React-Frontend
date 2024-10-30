import "../styles/main.css"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img3 from "../images/e2.jpg"
import imghover3 from "../images/e1.jpg"
import img4 from "../images/e4.jpg"
import imghover4 from "../images/e3.jpg"
import img5 from "../images/e6.jpg"
import imghover5 from "../images/e5.jpg"
import img6 from "../images/e8.jpg"
import imghover6 from "../images/e7.jpg"
import img7 from "../images/e10.jpg"
import imghover7 from "../images/e9.jpg"

const Carousel = () => {

  const lefting = {
    paddingLeft: '50px'
  }

  const images = [
   
    { src: img4,srcOverlay:imghover4 , alt: 'Image 2', instagramLink: 'https://www.instagram.com/auxibeatz/', aboutLink: 'https://www.instagram.com/auxibeatz/',firstText:'Evrim Berk',secondText:'Auxibeatz',thirdText:'Özkan' },
    { src: img5,srcOverlay:imghover5 , alt: 'Image 3', instagramLink: 'https://www.instagram.com/atepilla/', aboutLink: 'https://www.instagram.com/atepilla/',firstText:'Ahmet Talha',secondText:'ATE',thirdText:'Erzincanlı' },
    { src: img6,srcOverlay:imghover6 , alt: 'Image 1', instagramLink: 'https://www.instagram.com/emresakarli', aboutLink: 'https://www.instagram.com/emresakarli',firstText:'Emre',secondText:'Sakarlı',thirdText:'' },
    { src: img3,srcOverlay:imghover3 ,alt: 'Image 1', instagramLink: 'https://www.instagram.com/dj1han', aboutLink: 'https://www.instagram.com/dj1han',firstText:'',secondText:'1han',thirdText:'' },
    { src: img7,srcOverlay:imghover7 , alt: 'Image 2', instagramLink: 'https://www.instagram.com/djbig.g', aboutLink: 'https://www.instagram.com/djbig.g',firstText:'Ergin',secondText:'DJ BİG J',thirdText:'Keskin' }
  ];
 
  

  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    const [isHovered, setIsHovered] = useState(false);



    return ( 
      <div className="slider grid grid-cols-1 md:grid-cols-2 bg-[#2b271c] h-[800px]">
      <div class="flex flex-col items-center bg-[#2b271c] sm:bg-gradient">
     
  
  <div className="pt-12 pb-16 md:pt-32 md:pb-16 md:mr-24 h-[250px] lg:h-[500px]">
  <h2 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-12 text-white">
    {images[currentIndex].firstText}
  </h2>
  <h2
    className="text-4xl md:text-6xl font-semibold mb-4 md:mb-12 text-[#ffba00]"
  >
    {images[currentIndex].secondText}
  </h2>
  <h2 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6 text-white">
    {images[currentIndex].thirdText}
  </h2>
</div>

        
          
<div className="flex justify-center  space-x-4">
  <a href={images[currentIndex].instagramLink} target="_blank" rel="noopener noreferrer">
    <button className=" text-white font-bold text-lg md:text-xl py-2 md:py-4 px-6 md:px-12 border border-white rounded-full md:rounded-lg">
      Instagram
    </button>
  </a>
  <a href={images[currentIndex].aboutLink} target="_blank" rel="noopener noreferrer">
    <button className=" text-[#695c2c] bg-white font-bold text-lg md:text-xl py-2 md:py-4 px-6 md:px-12 rounded-full md:rounded-lg">
      Hakkında
    </button>
  </a>
</div>


       
      </div>
      <div class="grid grid-cols-3 gap-8" style={{ background: 'rgb(43,40,28)',
  background: 'linear-gradient(180deg, rgba(43,40,28,1) 50%, rgba(238,202,77,1) 80%)',
  gridTemplateColumns: '1% 80% 1%' }}>
  <div class="col-span-1">
    <button onClick={handlePrev} className="slider__button slider__button--prev absolute justify-center text-center mr-2 md:mr-2">
      <FaChevronLeft/>
    </button>
  </div>
  <div class="col-span-1 ml-2 md:ml-4">
    <img
      width='100%'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      src={isHovered ? images[currentIndex].srcOverlay : images[currentIndex].src}
      alt={images[currentIndex].alt}
      className="slider__image"
      style={{ background: 'linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(233,197,75,100) 100%)',
      backgroundColor: 'rgb(0,0,0)',boxShadow:'0 10px 15px rgba(0, 0, 0, 0.5)',borderRadius:'20px'}}
    />
  </div>
  <div class="col-span-1">
    <button onClick={handleNext} className="slider__button slider__button--next absolute justify-center text-center ml-0 md:mr-0">
      <FaChevronRight/>
    </button>
  </div>
</div>


       
        
      </div>
    );
  };
  const BG = () => { 

    const bgColor = {
      backgroundColor: '#e9c54c',
      width: '100%',
      height: '100px'
    }

    return(
      <div style={bgColor}>

      </div>
    );

  };

  return ( 
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ImageSlider />
        
      </div>   
           
    </div>
  );
};

export default Carousel;
