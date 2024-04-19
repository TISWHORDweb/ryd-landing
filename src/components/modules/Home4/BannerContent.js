import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const BannerContent = () => {
    const backgroundImage = {
        backgroundImage: "url('/images/banner/shape1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <div>
        <section className='banner brand-4 bg--cover' style={backgroundImage}>
            <div className='container'>
            <div className="banner__wrapper">
                <div className="banner__content banner__content--style1" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="title-font1">Explore the synergy of tech and education in learning. </h1>
                    <div className="btn-group justify-content-center">
                        <Link href="https://app.rydlearning.com/parent/sign-up" className="trk-btn trk-btn--rounded trk-btn--primary4">{"Get Started "}
                            <span><FaArrowRight /></span> </Link>
                        <Link href="https://app.rydlearning.com" className="trk-btn trk-btn--rounded trk-btn--defult">{"Enroll Now "} <span><FaArrowRight /></span></Link>
                    </div>
                </div>
                <div className="banner-image">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="banner-image__item" data-aos="fade-right" data-aos-duration="1000">
                                <div className="banner-image__item-inner ">
                                    <img src="/images/banner/4.png" alt="banner-image-banner"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="banner-image__item" data-aos="fade-up" data-aos-duration="1000">
                                <div className="banner-image__item-inner banner-image__item-inner--style2">
                                    <img src="/images/banner/5.png" alt="banner-image-banner"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="banner-image__item" data-aos="fade-left" data-aos-duration="1000">
                                <div className="banner-image__item-inner">
                                    <img src="/images/banner/6.png" alt="banner-image-banner"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>

  )
}

export default BannerContent
