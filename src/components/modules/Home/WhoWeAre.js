import Counter from '../../base/Counter'

const WhoWeAre = () => {
  return (
    <div>
         <div className="about__wrapper">
        <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-md-8">
                <div className="about__content" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                    <div className="section-header">
                        <div className="subtitle subtitle--style4">
                            <p className="mb-0">who we are</p>
                        </div>
                        <h2 className="about-title">We Passionately create curiosity for tomorrow's innovations.</h2>
                        <p>At RYD Learning, we're not just educators; we're passionate facilitators of curiosity and creators of tomorrow's innovators. We create the right environment for an early start to greatness. With us, you stand to gain:</p>
                        <ul style={{ listStyle: 'disc', fontWeight: 500, marginLeft: '30px'}}>
                            <li>Certified Training</li>
                            <li>Experienced Teachers</li>
                            <li>Industry Professionals</li>
                            <li>Redefined  Online Learning</li>
                        </ul>
                    </div>
                    <div className="about__counter">
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={200} end="256" delay={20} />+
                            </h3>
                            <p>Enrolled Learner</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0}  end="89" delay={10} />
                            </h3>
                            <p>Finished Session</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0} end="99" delay={10} />+
                            </h3>
                            <p>Satisfaction Rate</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0} end="80" delay={10} />+
                            </h3>
                            <p>Awards Winning</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-4">
                <div className="about__thumb" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                    <div className="about__thumb-inner">
                        <div className="about__thumb-image">
                            <img src="/images/about/home1/2.png" alt="about-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default WhoWeAre