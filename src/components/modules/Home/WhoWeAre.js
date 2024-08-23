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
                        <p>
                            We're not merely educators; we're enthusiastic guides of curiosity and cultivators of future innovators. <br/><br/>
                            With practical handholding virtual in class tutorship and partnership with Codecombat, we foster the 
                            perfect setting for an early journey toward excellence. <br/><br />
                            Our curriculum aligns with CSTA (Computer Science Teachers Association) & 
                            ISTE (International Society for Technology in Education), you'll gain: 

                        </p>
                        <ul style={{ listStyle: 'disc', fontWeight: 500, marginLeft: '30px'}}>
                            <li>Experienced Teachers</li>
                            <li>Enthralling Materials</li>
                            <li>Redefined Online Learning</li>
                            <li>Realtime Project Learning</li>
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