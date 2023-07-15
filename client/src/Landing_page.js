import './Landing_page.css';
import Navbar from './NavComponents/Navbar';
import Doccarousel from './DocCarousel/docCarousel';
import { useEffect } from 'react';


function LP() {
  useEffect(() => {
    let leftBtn = document.getElementsByClassName("styles-module_carousel-base__3keqD")[0].children[0].children[0];
    let rightBtn = document.getElementsByClassName("styles-module_carousel-base__3keqD")[0].children[2].children[0];

    leftBtn.innerHTML = "<";
    rightBtn.innerHTML = ">";
    leftBtn.classList.add("carouselMoveBtn");
    rightBtn.classList.add("carouselMoveBtn");
  }, [])

  return (
    <>
      <Navbar />
      <div className='quote'><strong>Quality healthcare at your fingertips</strong></div>
      <Doccarousel />
      
    </>
  );
}

export default LP;
