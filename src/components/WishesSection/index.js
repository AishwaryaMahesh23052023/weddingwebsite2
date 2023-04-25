import React from 'react';
import WishesContainer from './WishesContainer';

function WishesSection() {
  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Gallery</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{textAlign:"center"}}>
              <p style={{fontSize:"2rem"}}>Our moments together...</p>
              <p style={{fontSize:"2rem"}}>Stay Tuned..<br/>
                  Coming soon...</p>
              {/* <WishesContainer /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishesSection;
