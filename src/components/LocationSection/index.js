import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import { GroomBrideDetails } from '../../constants';
import BACKGROUND from '../../assets/images/location_img.jpg';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story"  css={styWrapper}  style={{backgroundColor:"#4F200D"}}  >
        <div className="container" >
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Location</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong style={{color:"white"}}>{GroomBrideDetails.hallName}</strong>
                </a>{' '}
                <br />
                {GroomBrideDetails.hallAddressFirstLine} <br />
                {GroomBrideDetails.hallSecondLine}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1" style={{textAlign:"center"}}>
              <iframe
                src={GroomBrideDetails.mapLink}
                width="80%"
                height="400"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title= {`Google Maps - ${GroomBrideDetails.firstName} & ${GroomBrideDetails.secondName} Wedding Party`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
