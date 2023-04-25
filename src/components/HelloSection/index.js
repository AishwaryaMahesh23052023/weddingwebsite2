import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/bride.jpg';
import Groom from '@assets/images/groom.jpg';
import {WEDDINGDATE,GroomBrideDetails} from '../../constants';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  console.log("invitation value"+isInvitation)
  // const finalSubtitle = isInvitation ? '03 Oktober 2020, HARRIS Hotel Sentraland, Semarang' : 'Sabtu, 03 Oktober 2020';

  // const finalSubtitle = {WEDDINGDATE}
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Hello</h2>
              {/* <h3 className="sub-title hs">{WEDDINGDATE}</h3> */}
              <p className="info" style={{fontSize:"20px"}}>
                <i>Meet the {GroomBrideDetails.first} & {GroomBrideDetails.second}</i>
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font" style={{fontSize:"40px"}}>{GroomBrideDetails.firstName}</h3>
                <p className="parent-name parent-name__top" style={{marginBottom:"5px"}}>
                  {GroomBrideDetails.firstDescription[0]} <br />& {GroomBrideDetails.firstDescription[1]}
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading" style={{marginBottom:'0px'}}>
                <i className="" style={{fontSize:'5rem'}}>   </i>
              </div>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font"  style={{fontSize:"40px"}}>{GroomBrideDetails.secondName}</h3>
                <p className="parent-name">
                  {GroomBrideDetails.secondDescription[0]} <br />& {GroomBrideDetails.secondDescription[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Seputar Covid-19</h2>
                <p className="info">
                  Berkaitan dengan kondisi pandemik saat ini, keberlangsungan acara kami mengacu pada pedoman
                  Kementerian Kesehatan, yaitu memberlakukan pembatasan jarak dan pembatasan jumlah tamu undangan.
                </p>
                <p className="info">
                  Maka dari itu, dengan segala kerendahan hati, kami mohon maaf jika belum bisa mengundang saudara/i
                  dihari bahagia kami. Sekiranya do'a dari saudara/i sudah lebih dari cukup bagi kami. Semoga kita semua
                  selalu dalam lindungan Allah SWT. Aamiin ya rabbal allamiin..
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
