import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section class="hero">

    <div class="hero-content">
    
       <h1 class="hero-title">
            iPhone 14 Pro
       </h1>
         
       <h2 class="hero-subtitle">
            Pro.Beyond.
       </h2>
       <div className='HeroSectionAnchorTag'>
       <a href="#/">Learn More <span className='fa fa-chevron-right'></span></a>
       <a href="#/">Buy <span className='fa fa-chevron-right'></span></a>
       </div>
         
    
    </div>

</section>
  )
}

export default HeroSection;