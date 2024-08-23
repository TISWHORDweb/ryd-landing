import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const MentorCard = ({ data }) => {
  return (
    <div className="team__item-inner">
      <div className="team__item-thumb">
        <img src={data.avatar} alt="Team Image" />
      </div>
      <div className="team__item-content team__item-content--style2">
        <div className="team__item-author">
          <h6>
            <Link href="/mentor-details">
              {data.name}
            </Link>
          </h6>
          <p className="mb-0">{data.role}</p>
          <ul className="social social--style2 mt-2 justify-content-center">
            <li className="social__item">
              <Link href="" className="social__link social__link--defult">
                <FontAwesomeIcon icon={faFacebook}/>
              </Link>
            </li>
            <li className="social__item">
              <Link href="" className="social__link social__link--defult">
                <FontAwesomeIcon icon={faInstagram}/>
              </Link>
            </li>
            <li className="social__item">
              <Link href="" className="social__link social__link--defult">
                <FontAwesomeIcon icon={faYoutube}/>
              </Link>
            </li>
            <li className="social__item">
              <Link href="/signin"
                 className="social__link social__link--defult">
                  <FontAwesomeIcon icon={faTwitter}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
