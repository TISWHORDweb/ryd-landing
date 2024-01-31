import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const BannerContent = () => {
  return (
<section className="banner padding-bottom banner--style3 bg--cover"
        style={{backgroundImage:"url(/images/bg/home3/1.png)"}}>
        <div className="container">
            <div className="banner__wrapper">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="banner__content banner__content--style3" data-aos="zoom-in"
                            data-aos-duration="1000">
                            <div className="banner__content-star">
                                <img src="/images/icon/home3/1.png" alt="star icon"/>
                                <div className="star-details">
                                    <span>Start Learning Today</span>
                                </div>
                            </div>
                            <h1>The Best
                                Platform Enroll
                                in Your Special Course</h1>
                            <p>“Our mision is to help people to find the best course - online and learn with expert
                                anywhere”
                            </p>
                            <div className="btn-group">
                                <Link href="signin" className="trk-btn  trk-btn--secondary3">Get Started
                                    <span><FontAwesomeIcon icon={faArrowRight} /></span> </Link>
                                <Link href="about" className="trk-btn trk-btn--secondary brand-3">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__thumb banner__thumb--style3">
                            <div className="banner__thumb-item">
                                <img src="/images/banner/home3/1.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div className="banner__icon banner__icon--style2">
            <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home3/4.png"
                    alt="dot icon"/></span>
            <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home3/2.png"
                    alt="star icon"/></span>
            <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home3/3.png"
                    alt="watch icon"/></span>
        </div>
    </section>
    
  )
}

export default BannerContent