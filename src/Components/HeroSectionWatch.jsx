import React from 'react'
import '../styles/HeroSectionWatch.css';
import pic from '../pngwing.com.png';

const HeroSectionWatch = () => {
  return (
<section class="heroThird">

<div class="heroThird-content">

   <h1 class="heroThird-title">
        <span><img src={pic} alt="iwatch" /></span>
        <div className='innerDiv'> 
        WATCH
        <span className='span'>SERIES 8</span>
        </div>
   </h1>
     
   <h2 class="heroThird-subtitle">
        <span>A healthy leap ahead.</span>
   </h2>
   <div className='heroThirdAnchorTag'>
   <a href="#/">Learn More <span className='fa fa-chevron-right'></span></a>
   <a href="#/">Buy <span className='fa fa-chevron-right'></span></a>
   </div>
     

</div>

</section>
  )
}

export default HeroSectionWatch;