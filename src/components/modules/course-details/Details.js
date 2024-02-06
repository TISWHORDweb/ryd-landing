import { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import {
  FaFacebookF,
  FaFile,
  FaGripVertical,
  FaInstagram,
  FaPhoneAlt,
  FaRegClock,
  FaStar,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

import { BsCheckCircle } from "react-icons/bs";

const Details = ({ props }) => {
  const [toggler, setToggler] = useState(false);
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    if (index !== toggle) {
      setToggle(index);
    }
  };


  const bgColor = props.category?.toLowerCase() === "basic" ? "#FFE3EC" : "#EBFEEA";

  const style = { backgroundColor: bgColor, width: 'fit-content', padding: '5px 15px', borderRadius: '12px', marginBottom: '30px', fontSize: '14px', color: 'black' }

  return (
    <>
      <FsLightbox toggler={toggler} sources={["https://www.youtube.com/watch?v=1y_kfWUCFDQ"]} />

      <div className="coursedetails coursedetails--style1 padding-top padding-bottom">
        <div className="container" data-aos="fade-up" data-aos-duration="800">
          <div className="row flex-lg-row-reverse g-5">
            <div className="col-lg-4">
              <div className="coursedetails__package">
                <Link href={props.vid} target="_blank" className="coursedetails__thumb">
                  <img src={`${props?.thumbnail}`} alt="packgae-image" />
                  <div className="coursedetails__thumb-playbtn" >
                    <Link href="/signin"
                    //  onClick={(e) => {
                    //   setToggler(!toggler)
                    //   e.preventDefault()}}
                    >
                      <img src={"/images/course/home1/2.png"} alt="play-btn" />
                    </Link>
                  </div>
                </Link>
                <div className="coursedetails__offer">
                  <div className="" style={style}>
                    <span>{props.category}</span>
                  </div>

                  <Link
                    href="https://app.rydlearning.com/auth-login"
                    className="trk-btn trk-btn--border trk-btn--secondary1 d-block"
                  >
                    Get Started
                  </Link>

                  <div className="coursedetails__offer-social">
                    {/* <ul className="social">
                      <li className="social__item">
                        <Link
                          href=""
                          className="social__link social__link--rounded5"
                        >
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href=""
                          className="social__link social__link--rounded5"
                        >
                          <FaInstagram />
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="/signin"
                          className="social__link social__link--rounded5"
                        >
                          <FaTwitter />
                        </Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
                {/* <div className="coursedetails__footer">
                  <p>For details the course</p>
                  <Link href="tel:16910">
                    <FaPhoneAlt /> Call (16910)
                  </Link>
                </div> */}
              </div>
            </div>


            <div className="col-lg-8">
              <div className="coursedetails__content">
                <div className="coursedetails__header">
                  <h3>{props?.title}</h3>
                  <div className="coursedetails__focus">
                    <div className="coursedetails__focus-rating">
                      <span>4.5</span>
                    </div>
                    <div className="coursedetails__focus-star">
                      <ul>
                        <li>
                          <FaStar size={14} />
                        </li>
                        <li>
                          <FaStar size={14} />
                        </li>
                        <li>
                          <FaStar size={14} />
                        </li>
                        <li>
                          <FaStar size={14} />
                        </li>
                        <li>
                          <FaStar size={14} />
                        </li>
                      </ul>
                    </div>
                    {/* <div className="coursedetails__focus-count">
                      <span>(237,732 ratings)</span>
                    </div>
                    <div className="coursedetails__focus-students">
                      <span>10+ Student</span>
                    </div> */}
                  </div>
                </div>

                <div className="coursedetails__info">
                  <ul className="nav nav-pills " id="pills-tab" role="tablist">
                    <li
                      className={toggle === 1 ? "nav-item active" : "nav-item"}
                      role="presentation"
                    >
                      <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "trk-btn active" : "trk-btn"}
                        id="pills-overview-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-overview"
                        role="tab"
                        aria-controls="pills-overview"
                        aria-selected={toggle === 1 ? "true" : "false"}
                      >
                        <FaGripVertical /> Overview
                      </button>
                    </li>

                    <li
                      className={toggle === 2 ? "nav-item active" : "nav-item"}
                      role="presentation"
                    >
                      <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "trk-btn active" : "trk-btn"}
                        id="pills-curriculum-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-curriculum"
                        role="tab"
                        aria-controls="pills-curriculum"
                        aria-selected={toggle === 2 ? "true" : "false"}
                      >
                        <FaFile /> Curriculum
                      </button>
                    </li>
                    {/* <li
                      className={toggle === 3 ? "nav-item active" : "nav-item"}
                      role="presentation"
                    >
                      <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "trk-btn active" : "trk-btn"}
                        id="pills-instructor-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-instructor"
                        role="tab"
                        aria-controls="pills-instructor"
                        aria-selected={toggle === 3 ? "true" : "false"}
                      >
                        <FaUser /> Instructor
                      </button>
                    </li>
                    <li
                      className={toggle === 4 ? "nav-item active" : "nav-item"}
                      role="presentation"
                    >
                      <button
                        onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "trk-btn active" : "trk-btn"}
                        id="pills-reviews-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-reviews"
                        role="tab"
                        aria-controls="pills-reviews"
                        aria-selected={toggle === 4 ? "true" : "false"}
                      >
                        <FaStar /> Reviews
                      </button>
                    </li>
                    <li
                      className={toggle === 5 ? "nav-item active" : "nav-item"}
                      role="presentation"
                    >
                      <button
                        onClick={() => toggleTab(5)}
                        className={toggle === 5 ? "trk-btn active" : "trk-btn"}
                        id="pills-help-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-help"
                        role="tab"
                        aria-controls="pills-help"
                        aria-selected={toggle === 5 ? "true" : "false"}
                      >
                        <FaPhoneAlt />
                        Help
                      </button>
                    </li> */}
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={
                        toggle === 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade show"
                      }
                      id="pills-overview"
                      role="tabpanel"
                      content="pills"
                      aria-labelledby="pills-overview-tab"
                      tabIndex="0"
                    >
                      <div className="coursedetails__overview">
                        <h5>Course Summary</h5>
                        <p>
                          {props?.summary}
                        </p>

                        <h5>What will you learn from this course?</h5>
                        <ul className="overview-list">
                          {props?.curriculum?.map((item, index) => (
                            <li key={index}>
                              <BsCheckCircle /> {item}
                            </li>
                          ))}
                        </ul>
                          
                        { props.language &&
                          <>
                            <h5>Programming Language</h5>
                            <p className="mb-2">{props.language}</p>
                          </>
                        }

                        { props.tools &&
                          <>
                            <h5>Tools Required</h5>
                            <p className="mb-2">{props.tools}</p>
                          </>
                        }
                        
                        

                        <h5>Course Project</h5>
                        <p className="mb-2">{props.project}</p>
                      </div>
                    </div>

                    <div
                      className={
                        toggle === 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade show"
                      }
                      id="pills-curriculum"
                      role="tabpanel"
                      aria-labelledby="pills-curriculum-tab"
                      tabIndex="0"
                    >
                      <div className="coursedetails__curriculum">
                        <div className="coursedetails__overview">
                          <h5>What will you learn from this course?</h5>
                          <ul className="overview-list">
                            {props?.curriculum?.map((item, index) => (
                              <li key={index}>
                                <BsCheckCircle /> {item}
                              </li>
                            ))}
                          </ul>
                          <h5>Course Project</h5>
                          <p className="mb-2">{props.project}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        toggle === 3
                          ? "tab-pane fade show active"
                          : "tab-pane fade show"
                      }
                      id="pills-instructor"
                      role="tabpanel"
                      aria-labelledby="pills-instructor-tab"
                      tabIndex="0"
                    >
                      <div className="coursedetails__instructor">
                        <div className="team team--details mt-5">
                          <div className="team__wrapper">
                            <div className="row g-5 align-items-center">
                              <div className="col-lg-4">
                                <div className="team__thumb">
                                  <img
                                    src="/images/team/home3/3.png"
                                    alt="Team Image"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="team__content">
                                  <h5 className="mb-0">Marvin McKinney</h5>
                                  <p className="designation">
                                    Web Designer, Researcher, Instructor at Tork
                                  </p>
                                  <p className="info">
                                    A Zend-certified PHP developer and an active
                                    community person who loves to lead and engage
                                    with other developers. A full-stack developer
                                    with a strong programming.
                                  </p>

                                  <ul className="social mt-4">
                                    <li className="social__item">
                                      <Link
                                        href=""
                                        className="social__link social__link--rounded5"
                                      >
                                        <FaFacebookF />
                                      </Link>
                                    </li>
                                    <li className="social__item">
                                      <Link
                                        href=""
                                        className="social__link social__link--rounded5"
                                      >
                                        <FaInstagram />
                                      </Link>
                                    </li>
                                    <li className="social__item">
                                      <Link
                                        href="/signin"
                                        className="social__link social__link--rounded5"
                                      >
                                        <FaTwitter />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        toggle === 4
                          ? "tab-pane fade show active"
                          : "tab-pane fade show"
                      }
                      id="pills-reviews"
                      role="tabpanel"
                      aria-labelledby="pills-reviews-tab"
                      tabIndex="0"
                    >
                      <div className="coursedetails__reviews">
                        <div className="coursedetails__overview">
                          <h5>Reviews</h5>
                          <div className="coursedetails__coursereviews">
                            <div className="coursedetails__coursereviews-author">
                              <div className="coursedetails__coursereviews-thumb">
                                <img
                                  src="/images/testimonial/home1/2.png"
                                  alt="author"
                                />
                              </div>
                              <div className="coursedetails__coursereviews-designation">
                                <h6>Jhon Abraham</h6>
                                <span>Frontend Designer</span>
                                <blockquote>
                                  <p>
                                    There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humor
                                  </p>
                                </blockquote>
                              </div>
                            </div>
                            <div className="coursedetails__coursereviews-rating">
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                            </div>
                          </div>
                          <div className="coursedetails__coursereviews">
                            <div className="coursedetails__coursereviews-author">
                              <div className="coursedetails__coursereviews-thumb">
                                <img
                                  src="/images/testimonial/home1/3.png"
                                  alt="author"
                                />
                              </div>
                              <div className="coursedetails__coursereviews-designation">
                                <h6>Michael Jack</h6>
                                <span>Designer</span>
                                <blockquote>
                                  <p>
                                    There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humor
                                  </p>
                                </blockquote>
                              </div>
                            </div>
                            <div className="coursedetails__coursereviews-rating">
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gold" />
                              </span>
                              <span>
                                <FaStar size={15} color="gray" />
                              </span>
                              <span>
                                <FaStar size={15} color="gray" />
                              </span>
                            </div>
                          </div>
                          <div className="coursedetails__reviewform">
                            <h5>Write Review</h5>
                            <form action="/">
                              <div className="coursedetails__coursereviews-rating mb-4">
                                <Link href="">
                                  <span>
                                    <FaStar size={15} color="gold" />
                                  </span>
                                </Link>
                                <Link href="">
                                  <span>
                                    <FaStar size={15} color="gold" />
                                  </span>
                                </Link>
                                <Link href="">
                                  <span>
                                    <FaStar size={15} color="gold" />
                                  </span>
                                </Link>
                                <Link href="">
                                  <span>
                                    <FaStar size={15} color="gray" />
                                  </span>
                                </Link>
                                <Link href="">
                                  <span>
                                    <FaStar size={15} color="gray" />
                                  </span>
                                </Link>
                              </div>
                              <div className="row g-4">
                                <div className="col-lg-6">
                                  <div className="input-group">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Full Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="input-group">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Subject"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-group">
                                    <input
                                      className="form-control"
                                      type="email"
                                      placeholder="Email here"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-group">
                                    <textarea
                                      cols="30"
                                      rows="5"
                                      className="form-control"
                                      placeholder="Enter Your Message"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="trk-btn trk-btn--rounded trk-btn--secondary1 mt-5"
                              >
                                Submit Now
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        toggle === 5
                          ? "tab-pane fade show active"
                          : "tab-pane fade show"
                      }
                      id="pills-help"
                      role="tabpanel"
                      aria-labelledby="pills-help-tab"
                      tabIndex="0"
                    >
                      <div className="coursedetails__help">
                        <div className="coursedetails__overview">
                          <h5>For details about the course</h5>
                          <p>
                            There are many people who know English well, but feel
                            reluctant to speak English due to lack of confidence.
                            Ten Minute School brings you the 'Spoken English.
                          </p>
                          <div className="coursedetails__overview-helpline">
                            <div className="row g-4 align-items-center">
                              <div className="col-md-6">
                                <div className="thumb">
                                  <img
                                    src="/images/course/home1/1.png"
                                    alt="packgae-image"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="info ps-3">
                                  <h6>Our Hotline</h6>
                                  <Link href="tel:16910">
                                    <FaPhoneAlt /> Call (16910)
                                  </Link>
                                </div>
                                <div className="info ps-3 mt-4">
                                  <h6>Email</h6>
                                  <Link href="mailto:example@example.com">
                                    {" "}
                                    <i className="fa-solid fa-envelope"></i>
                                    example@example.com
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Details;
