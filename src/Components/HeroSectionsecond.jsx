import React from 'react';
import '../styles/HeroSectionsecond.css';


const HeroSectionsecond = () => {
  return (
    <section class="heroSecond">

    <div class="heroSecond-content">
    
       <h1 class="heroSecond-title">
            iPhone 14
       </h1>
         
       <h2 class="heroSecond-subtitle">
            <span>Two great sizes.</span>
            <span>Now with a splash of yellow.</span>
       </h2>
       <div className='heroSecondAnchorTag'>
       <a href="#/">Learn More <span className='fa fa-chevron-right'></span></a>
       <a href="#/">Buy <span className='fa fa-chevron-right'></span></a>
       </div>
         
    
    </div>

</section>
  )
}

export default HeroSectionsecond;