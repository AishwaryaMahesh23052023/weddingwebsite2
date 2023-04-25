import React, { Fragment, useEffect, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { Link } from 'gatsby';

import WeddingImg from '@assets/images/wedding-logo.png';
import amlogo from '../../assets/images/am-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';
import {GroomBrideNames, WEDDINGHASHTAG} from '../../constants';
import GANESH from '../../assets/images/ganesh.svg';
import GaneshWhite from '../../assets/images/GANESH.png';
import Song from '../../assets/music/marathi_wedding_song.mp3';

const DELAY_TIME = 0;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);
  const [audio,setAudio] = useState('');

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setLoading(false);
      setAlreadyDownloadData(true);
      setTimeout(() => {
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const playMusic =()=>{
    console.log("scroll");
    try {
      const myAudio =  document.getElementById('myAudio');
       myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }
  }

  
  

  const renderGuestSection = () => {
    if (isAnonymGuest) return <h2 className="to-dearest-name">Dear Friends,</h2>;

    return (
      <Fragment>
        <h3 className="to-dearest">To our Dearest</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}  onScroll={playMusic}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="ganapati"><img src={GaneshWhite} style={{transform:"scale(0.8)"}} /></div>
              <div style={{padding:'0px'}}></div>
              <img src={amlogo} alt="wedding-M-A" style={{transform:"scale(1.2)"}}/>
              
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">{GroomBrideNames[0]} &amp; {GroomBrideNames[1]}</h1>
              {/* <h3 className="hashtag">{WEDDINGHASHTAG}</h3> */}
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
              {/* <button onClick={playMusic}>Play</button> */}
              {/* {renderGuestSection()} */}
              {/* {isInvitation && (
                <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block">Be the Guest</button>
                    </Link>
                  </div>
                </div>
              )} */}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
