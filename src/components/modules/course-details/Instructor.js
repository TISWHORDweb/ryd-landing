import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Instructor = () => {
  return (
    <div>
    <div className="section-header">
        <h3>Instructor</h3>
    </div>
    <div className="team__wrapper">
        <div className="row g-5 align-items-center">
            <div className="col-md-4">
                <div className="team__thumb">
                    <img src="/images/team/home3/3.png" alt="Team Image"/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="team__content">
                    <h4 className="mb-0">Marvin McKinney</h4>
                    <p className="designation">Web Designer, Researcher, Instructor at Tork</p>
                    <p className="info">A Zend-certified PHP developer and an active community person who loves to
                        lead and
                        engage with other developers. A full-stack developer with a strong programming
                        background and experience in Alpine.js, Vue.js, React.js, Laravel, Headless/Server less
                        applications, API development, RDBMS, WordPress, and System Architecture.</p>

                    <ul className="social mt-4">
                        <li className="social__item">
                            <Link href=""className="social__link social__link--rounded5"><FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                        </li>
                        <li className="social__item">
                            <Link href=""className="social__link social__link--rounded5"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </li>
                        <li className="social__item">
                            <Link href="" className="social__link social__link--rounded5"><FontAwesomeIcon icon={faTwitter} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Instructor