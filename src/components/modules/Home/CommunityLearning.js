import "aos/dist/aos.css";
import Counter from '../../base/Counter';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const CommunityLearning = () => {
  return (
    <div className='community community--style1 padding-top padding-bottom brand1-bg-1 aos-init aos-animate'>
    <div className='container '>
      <div className="section-header text-center ">
    <h2>Join the biggest <br/>
        Community of learning</h2>
    <p className="style2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, quis malesuada sed
        tristique sed
        vulputate eleifend urna potenti. Amet non sed eget</p>
</div>
<div className="community__wrapper">
    <div className="community__map">
        <div className="community__map-inner">
            <div className="community__reviews" data-aos="fade-up" data-aos-duration="1000" style={{margin:"0 auto"}}>
                <p> <FontAwesomeIcon icon={faHeart} /> Happy Strudents</p>
                <div className="community__reviews-content">
                    <ul>
                        <li><img src="/images/community/avator/1.png" alt="user image"/></li>
                        <li><img src="/images/community/avator/2.png" alt="user image"/></li>
                        <li><img src="/images/community/avator/3.png" alt="user image"/></li>
                        <li><img src="/images/community/avator/4.png" alt="user image"/></li>
                        <li><img src="/images/community/avator/5.png" alt="user image"/></li>
                    </ul>
                    <p className="count mb-0">+<Counter className=".community__reviews-content" start={0} end={25} delay={200} />K
                    </p>

                </div>
            </div>
            <img src="/images/community/1.png" alt="community image" data-aos="fade-up" data-aos-duration="800"/>
            <Link href="/signup" className="trk-btn trk-btn--rounded trk-btn--secondary1">Join Now</Link>
        </div>
    </div>
</div>
</div>
</div>
  )
}

export default CommunityLearning