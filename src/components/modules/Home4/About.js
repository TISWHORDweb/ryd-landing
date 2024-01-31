import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
const About = () => {
  return (
    <section className="about about--style4 padding-top padding-bottom">
    <div className="container">
        <div className="about__wrapper">
            <div className="row gx-4 gy-5 align-items-center">
                <div className="col-lg-6">
                    <div className="about__thumb" data-aos="fade-right" data-aos-duration="800">
                        <div className="about__thumb-inner">
                            <div className="about__thumb-image">
                                <img src="/images/about/3.png" alt="about-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about__content" data-aos="fade-left" data-aos-duration="800">
                        <div className="about__content-inner">
                            <h2 className="style2-h2">We inspire curiosity for innovations.</h2>
                            <p>At RYD Learning, we're not just educators; we're passionate facilitators of curiosity and creators of tomorrow's innovators. We create the right environment for an early start to greatness. With us, you stand to gain:</p>
                            <ul className="about-list">
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Certified Training</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Experienced Teachers</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Industry Professionals</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Redefined  Online Learning</li>
                            </ul>
                            <Link href="about" className="trk-btn trk-btn--rounded trk-btn--secondary4">Learn More
                                <span><span><FaArrowRight /></span></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="about__shape">
        <span className="about__shape-item"><img src="/images/about/4.png" alt="star"/></span>
    </div>
</section>
  )
}

export default About