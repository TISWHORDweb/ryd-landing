import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";

const CourseDetails = () => {
  const [selected, setSelected] = useState([]);

  const toggle = (idx) => {
    if (selected.includes(idx)) {
      setSelected(selected.filter((item) => item !== idx));
    } else {
      setSelected([...selected, idx]);
    }
  };
  const checkElement = (element) => {
    return selected.includes(element);
  };

  return (
    <div className="coursedetails__wrapper">
      <div className="coursedetails__header">
        <h3>Course Curriculum</h3>
        <div className="coursedetails__info">
          <div className="coursedetails__info-item">
            <h6>05</h6>
            <span>Topic</span>
          </div>
          <div className="coursedetails__info-item">
            <h6>15</h6>
            <span>Lesson</span>
          </div>
          <div className="coursedetails__info-item">
            <h6>20</h6>
            <span>Video</span>
          </div>
        </div>
      </div>

      <div className="coursedetails__curriculum">
        <div className="accordion" id="faqAccordion2">
          <div className="row g-4">
            <div className="col-12">
              <div className="accordion__item">
                <div className="accordion__header" id="faq1">
                  <button
                    onClick={() => toggle(1)}
                    className={
                      checkElement(1)
                        ? "accordion__button"
                        : "accordion__button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqBody1"
                    aria-expanded={checkElement(1) ? "true" : "false"}
                    aria-controls="faqBody1"
                  >
                    <span className="lesson-name">Course Introduction</span>
                    <span className="lesson">
                      <span className="lesson-number">Lesson 01</span>
                      {checkElement(1) ? (
                        <AiOutlineMinus onClick={() => toggle(1)} />
                      ) : (
                        <AiOutlinePlus onClick={() => toggle(1)} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  id="faqBody1"
                  className={
                    checkElement(1)
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby="faq1"
                  data-bs-parent="#faqAccordion1"
                >
                  <div className="accordion__body">
                    <ul className="overview-list">
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle />
                           1
                          Introduction to HTML
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 2 HTML
                          Syntax
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 3 HTML
                          Common Tags
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 4 HTML
                          Bold-Underline & Italic tag
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 5 HTML
                          Comments
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 6 HTML
                          Form
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 7 HTML
                          List Items
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 8 HTML
                          Image
                       </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="accordion__item">
                <div className="accordion__header" id="faq2">
                  <button
                    onClick={() => toggle(2)}
                    className={
                      checkElement(2)
                        ? "accordion__button"
                        : "accordion__button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqBody2"
                    aria-expanded={checkElement(2) ? "true" : "false"}
                    aria-controls="faqBody2"
                  >
                    <span className="lesson-name">Tools and Software</span>{" "}
                    <span className="lesson">
                      <span className="lesson-number">Lesson 02</span>
                      {checkElement(2) ? (
                        <AiOutlineMinus onClick={() => toggle(2)} />
                      ) : (
                        <AiOutlinePlus onClick={() => toggle(2)} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  id="faqBody2"
                  className={
                    checkElement(2)
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby="faq2"
                  data-bs-parent="#faqAccordion1"
                >
                  <div className="accordion__body">
                  <ul className="overview-list">
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle />
                           1
                          Introduction to HTML
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 2 HTML
                          Syntax
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 3 HTML
                          Common Tags
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 4 HTML
                          Bold-Underline & Italic tag
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 5 HTML
                          Comments
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 6 HTML
                          Form
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 7 HTML
                          List Items
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 8 HTML
                          Image
                       </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="accordion__item">
                <div className="accordion__header" id="faq3">
                  <button
                    onClick={() => toggle(3)}
                    className={
                      checkElement(3)
                        ? "accordion__button"
                        : "accordion__button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqBody3"
                    aria-expanded={checkElement(3) ? "true" : "false"}
                    aria-controls="faqBody3"
                  >
                    <span className="lesson-name">HTML</span>{" "}
                    <span className="lesson">
                      <span className="lesson-number">Lesson 03</span>
                      {checkElement(3) ? (
                        <AiOutlineMinus onClick={() => toggle(3)} />
                      ) : (
                        <AiOutlinePlus onClick={() => toggle(3)} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  id="faqBody3"
                  className={
                    checkElement(3)
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby="faq3"
                  data-bs-parent="#faqAccordion1"
                >
                  <div className="accordion__body">
                  <ul className="overview-list">
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle />
                           1
                          Introduction to HTML
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 2 HTML
                          Syntax
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 3 HTML
                          Common Tags
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 4 HTML
                          Bold-Underline & Italic tag
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 5 HTML
                          Comments
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 6 HTML
                          Form
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 7 HTML
                          List Items
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 8 HTML
                          Image
                       </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="accordion__item">
                <div className="accordion__header" id="faq3">
                  <button
                    onClick={() => toggle(4)}
                    className={
                      checkElement(4)
                        ? "accordion__button"
                        : "accordion__button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqBody3"
                    aria-expanded={checkElement(4) ? "true" : "false"}
                    aria-controls="faqBody3"
                  >
                    <span className="lesson-name">CSS</span>{" "}
                    <span className="lesson">
                      <span className="lesson-number">Lesson 04</span>
                      {checkElement(4) ? (
                        <AiOutlineMinus onClick={() => toggle(4)} />
                      ) : (
                        <AiOutlinePlus onClick={() => toggle(4)} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  id="faqBody3"
                  className={
                    checkElement(4)
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby="faq3"
                  data-bs-parent="#faqAccordion1"
                >
                  <div className="accordion__body">
                  <ul className="overview-list">
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle />
                           1
                          Introduction to HTML
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 2 HTML
                          Syntax
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 3 HTML
                          Common Tags
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 4 HTML
                          Bold-Underline & Italic tag
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 5 HTML
                          Comments
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 6 HTML
                          Form
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 7 HTML
                          List Items
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 8 HTML
                          Image
                       </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="accordion__item">
                <div className="accordion__header" id="faq3">
                  <button
                    onClick={() => toggle(5)}
                    className={
                      checkElement(5)
                        ? "accordion__button"
                        : "accordion__button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqBody3"
                    aria-expanded={checkElement(5) ? "true" : "false"}
                    aria-controls="faqBody3"
                  >
                    <span className="lesson-name">Creating Website</span>{" "}
                    <span className="lesson">
                      <span className="lesson-number">Lesson 05</span>
                      {checkElement(5) ? (
                        <AiOutlineMinus onClick={() => toggle(5)} />
                      ) : (
                        <AiOutlinePlus onClick={() => toggle(5)} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  id="faqBody3"
                  className={
                    checkElement(5)
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby="faq3"
                  data-bs-parent="#faqAccordion1"
                >
                  <div className="accordion__body">
                  <ul className="overview-list">
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle />
                           1
                          Introduction to HTML
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 2 HTML
                          Syntax
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 3 HTML
                          Common Tags
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 4 HTML
                          Bold-Underline & Italic tag
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 5 HTML
                          Comments
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 6 HTML
                          Form
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 7 HTML
                          List Items
                       </Link>
                      </li>
                      <li>
                        <Link href="" data-fslightbox>
                          <BsPlayCircle /> 8 HTML
                          Image
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
    </div>
  );
};

export default CourseDetails;
