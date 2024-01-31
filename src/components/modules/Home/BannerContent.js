import Link from 'next/link';
import BannerShape from './BannerShape';
import BannerAvatars from "../../../api/banner-avaters.json";
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
    <FsLightbox toggler={toggler} sources={["https://youtu.be/Hh1UCOizzMc","https://youtu.be/Hh1UCOizzMc","https://youtu.be/Hh1UCOizzMc"]} />
    <section className='banner brand-1'>
      <div className='container'>
        <div className="banner__wrapper">
          {/* banner content */}
          <div className="banner__content banner__content--style1" data-aos="zoom-in" data-aos-duration="1000">
            <h1>Grow Your Skills to Advance Your Career path.</h1>
            <p>Educating, Inspiring, & Transforming Young Women. A Tuituon-Free Private Meddle School</p>
            <div className="btn-group justify-content-center">
              <Link href="/signup" className="trk-btn trk-btn--rounded trk-btn--primary1">Get Started
              </Link>

              <Link href="" className='play-btn' onClick={()=>setToggler(!toggler)}>
                    <img src="/images/icon/svg/4.svg" alt="play-btn" />
                    Watch Video
                </Link>
            </div>
            
          </div>

          {/* banner images */}
          <div className="banner-image">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-4">
                <div className="banner-image__item" data-aos="fade-right" data-aos-duration="1000">
                  <div className="banner-image__item-inner">
                    <img src="/images/banner/1.png" alt="banner-image-banner" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="banner-image__item" data-aos="fade-up" data-aos-duration="1000">
                  <div className="banner-image__item-inner banner-image__item-inner--style2">
                    <img src="/images/banner/2.png" alt="banner-image-banner" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="banner-image__item" data-aos="fade-left" data-aos-duration="1000">
                  <div className="banner-image__item-inner">
                    <img src="/images/banner/3.png" alt="banner-image-banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerShape data={BannerAvatars}/>
    </section>
    </>
  );
};

export default Banner;
