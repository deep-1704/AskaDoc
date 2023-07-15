import './Landing_page.css';
import Navbar from './NavComponents/Navbar';
import Doccarousel from './DocCarousel/docCarousel';
import Docelement from './DocCarousel/docelement';
import { useEffect } from 'react';
import img1 from "/Users/deepprajapati/Desktop/Lets_Program/webd/AskaDoc/client/src/assets/images/online-medical-consultation-male-svgrepo-com.svg";
import step1img from "/Users/deepprajapati/Desktop/Lets_Program/webd/AskaDoc/client/src/assets/images/account-svgrepo-com.svg";
import step2img from "/Users/deepprajapati/Desktop/Lets_Program/webd/AskaDoc/client/src/assets/images/doctor-svgrepo-com.svg";
import step3img from "/Users/deepprajapati/Desktop/Lets_Program/webd/AskaDoc/client/src/assets/images/chat-round-dots-svgrepo-com.svg";
import arrowRight from "/Users/deepprajapati/Desktop/Lets_Program/webd/AskaDoc/client/src/assets/images/arrow-right-svgrepo-com.svg";

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
      <div className='intro-illus'>
        <div className='illus'>
          <img className='illusSvg' src={img1} alt="Online consultation illustration" />
        </div>
        <div className='intro'>
          <div className='intro-title'>Counselling Medical Sessions With <br />Licensed & Verified Experts</div>
          <div className='intro-txt'>
            Highly qualified team of some of the best names in Medical Science who deliver improved well-being to you. Carefully vetted through a rigorous selection process. Trained and experienced in all Medical techniques.
          </div>
          <div className='intro-list'>
            <ul>
              <li className='into-list-item'>Chat Sessions</li>
              <li className='into-list-item'>English And All Regional Indian Languages</li>
              <li className='into-list-item'>100% Private & Secure Platform</li>
              <li className='into-list-item'>24/7 Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='process'>
        <div className='process-title'>How it works</div>
        <div className='steps'>
          <Docelement imgsrc={step1img} name="Signup and create an account" spec="" />
          <img src={arrowRight} alt='arrow' style={{width:"10%"}}/>
          <Docelement imgsrc={step2img} name="Choose a Counselor by category or search for it" spec="" />
          <img src={arrowRight} alt='arrow'  style={{width:"10%"}}/>
          <Docelement imgsrc={step3img} name="Familiarise with the profile and start chatting." spec="" />
        </div>
      </div>
    </>
  );
}

export default LP;
