import Link from "next/link";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Team() {
  return (
    <div className="team team--details padding-top">
    <div className="container">
    <div className="team__wrapper">
      <div className="row g-5 align-items-center">
        <div className="col-md-4">
          <div className="team__thumb">
            <img src="/images/team/home1/1.png" alt="Team Image" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="team__content">
            <h3>Marvin McKinney</h3>
            <p className="designation">
              Web Designer, Researcher, Instructor at Tork
            </p>
            <span>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon icon={faStar} key={index}/>
              ))}
              5.0
            </span>
            <p className="info">
              A Zend-certified PHP developer and an active community person who
              loves to lead and engage with other developers. A full-stack
              developer with a strong programming background and experience in
              Alpine.js, Vue.js, React.js, Laravel, Headless/Serverless
              applications, API development, RDBMS, WordPress, and System
              Architecture.
            </p>

            <ul className="social mt-4">
              <li className="social__item">
                <Link href="" className="social__link social__link--rounded1">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="social__item">
                <Link href="" className="social__link social__link--rounded1">
                  <FaInstagram />{" "}
                </Link>
              </li>
              <li className="social__item">
                <Link href="" className="social__link social__link--rounded1">
                  <FaYoutube />
                </Link>
              </li>
              <li className="social__item">
                <Link
                  href=""
                  className="social__link social__link--rounded1"
                >
                  <FaTwitter/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Team;
