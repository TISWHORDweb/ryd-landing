import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const BannerContent = () => {
    const backgroundImage = {
        backgroundImage: "url('/images/banner/shape1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const [isOpen, setIsOpen] = useState(false);

  const loginLinks = [
    { 
      role: 'Parent', 
      href: 'https://app.rydlearning.com/parent/sign-in',
      className: 'trk-btn trk-btn--rounded trk-btn--default'
    },
    { 
      role: 'Promo', 
      href: 'https://promo.rydlearning.com/promo/parent/login',
      className: 'trk-btn trk-btn--rounded trk-btn--default'
    },
    { 
      role: 'Partner', 
      href: 'https://partners.rydlearning.com/partner/login',
      className: 'trk-btn trk-btn--rounded trk-btn--default'
    }
  ];
    return (
        <div>
            <section className='banner brand-4 bg--cover' style={backgroundImage}>
                <div className='container'>
                    <div className="banner__wrapper">
                        <div className="banner__content banner__content--style1" data-aos="zoom-in" data-aos-duration="1000">
                            <h1 className="title-font1">Let’s Jumpstart Imagination and Innovation as we nurture future tech geniuses.</h1>
                            <div className="btn-group justify-content-center">
                                <Link href="https://app.rydlearning.com/parent/sign-up" className="trk-btn trk-btn--rounded trk-btn--primary4">{"Enroll Now"}
                                    <span><FaArrowRight /></span> </Link>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="trk-btn trk-btn--rounded bg-black text-white trk-btn--default flex items-center justify-between w-full"
                                    >
                                        Log In
                                        <span><FaChevronDown className="ml-2" /></span>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute z-10 w-full mt-2 bg-black  rounded shadow-lg">
                                            {loginLinks.map((link) => (
                                               <> <Link
                                               key={link.role}
                                               href={link.href}
                                               className={`${link.className}  text-white block w-full text-left p-2 m-1 hover:bg-red`}
                                           >
                                               {link.role} Login <span><FaArrowRight className="inline-block ml-2" /></span>
                                           </Link> <br /></>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="banner-image">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="banner-image__item" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="banner-image__item-inner ">
                                            <img src="/images/banner/4.png" alt="banner-image-banner" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="banner-image__item" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="banner-image__item-inner banner-image__item-inner--style2">
                                            <img src="/images/banner/5.png" alt="banner-image-banner" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="banner-image__item" data-aos="fade-left" data-aos-duration="1000">
                                        <div className="banner-image__item-inner">
                                            <img src="/images/banner/6.png" alt="banner-image-banner" />
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
