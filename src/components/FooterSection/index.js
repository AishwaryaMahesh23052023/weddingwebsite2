import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import FOOTER_IMAGE from '../../assets/images/gallery.jpeg'
import Background from '@assets/images/bg-wedding.jpg'

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper} style={{backgroundImage:`url(${Background})`,backgroundSize:"cover",backgroundPosition: "center",width: "100%",minHeight: "70vh"}} >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Awaiting...</h2>
                <p className="info" style={{color:"white"}}>
                Your gracious presence
                </p>
                <img src={FOOTER_IMAGE} width="300px"/>
                <p className="info" style={{color:"white"}}>
                With gratitude to God and joy in our hearts, we along with our families request the honor of your presence at our wedding. We would be delighted to have your company as we unite in marriage, surrounded by our loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container" style={{textAlign:"center"}}>
          <div className="row copyright">
            Made with ❤️ by friends & family
            {/* <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2020 Dinda & Indra Wedding. All Rights Reserved.</small>
                <small className="block">
                  Covid-19 Icon by{' '}
                  <a href="https://www.flaticon.com/packs/covid-protection-measures-5" target="_blank" rel="noreferrer">
                    Flat Icon - Frepik
                  </a>
                </small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                    Anandito Anisa - Pernikahan Impian
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
              </p>
            </div> */}
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
