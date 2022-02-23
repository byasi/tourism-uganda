import React from 'react';

function Banner () {
  return(
    <div className="main-banner header-text" id="top">
    <div className="Modern-Slider">
      <div className="item item-1">
        <div className="img-fill">
            <div className="text-content service-hero-text text-center">
              <h3>Welcome to the </h3>
              <h1 className="font-weight--reguler text-white mb-30"><span style={{color:'#000'}}>Pearl</span> <span style={{color:'yellow'}}>of </span><strong style={{color:'red'}}>Africa</strong></h1>
            </div>
        </div>
      </div>
      <div className="item item-2">
        <div className="img-fill">
            <div className="text-content service-hero-text text-center">
            <h3>Come and the Experience the life the</h3>
            <h1 className="font-weight--reguler text-white mb-30"><span style={{color:'#b41525'}}>Tropical </span> <span style={{color:'yellow'}}>Gorillas</span></h1>
            </div>
        </div>
      </div>
      <div className="item item-3">
        <div className="img-fill">
            <div className="text-content service-hero-text text-center">
               <h3>Uganda's</h3>
            <h1 className="font-weight--reguler text-white mb-30"> <span style={{color:'#000'}}>Kings</span> <span style={{color:'yellow'}}>of the</span> <span style={{color:'red'}}>Savannah</span> </h1>
              
            </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Banner;