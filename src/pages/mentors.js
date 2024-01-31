import { useEffect, useState } from "react";
import Pagination from "../components/base/slots/Pagination";
import Newsletter from "../components/modules/newsletter/Newsletter";
import PageHeader from "../components/modules/Home/PageHeader";

import Header from "../components/headers/Header";
import MentorData from "../api/mentor.json";
import Footer from "../components/footers/Footer";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = MentorData.mentors;
      setMentors(data);
    };
    fetchData();
  }, []);

  const updateCurrent = (i) => {
    setCurrent(i);
  };

  return (
    <>
      <Header />
      <PageHeader
        title="Mentors"
        subtitle="Mentors"
        image='images/bg/home1/6.png'
      />
      
      <div>
        <section className="team team--style1 padding-top padding-bottom">
          <div className="container" data-aos="fade-up" data-aos-duration="800">
            <div className="section-header text-center">
              <h2>Meet the Expert Mentors</h2>
            </div>
            <div className="team__wrapper">
              <Pagination dataList={mentors} paginate={12}>
                <div slot="content">
                  <div className="row g-4">
                    {mentors
                      .slice((current - 1) * 12, current * 12)
                      .map((itm, idx) => (
                        <div key={idx} className="col-lg-3 col-sm-6">
                          <div className="team__item">
                            <div className="team__item-inner">
                              <div className="team__item-thumb">
                                <img src={itm.avatar} alt="Team Image" />
                              </div>
                              <div className="team__item-content team__item-content--style1">
                                <div className="team__item-author">
                                  <h6>
                                    <Link href="/mentor-details">
                                      {itm.name}
                                    </Link>
                                  </h6>
                                  <p>{itm.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div slot="button">
                  <div className="paginations">
                    <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                      <li>
                        <Link
                          href=""
                          onClick={() => updateCurrent(current - 1 || 1)}
                        >
                          <FaArrowLeft />
                        </Link>
                      </li>
                      {Array.from(
                        { length: Math.ceil(mentors.length / 12) },
                        (_, i) => i + 1,
                      ).map((item) => (
                        <li key={item}>
                          <Link
                            href=""
                            className={current === item ? "active" : ""}
                            onClick={() => updateCurrent(item)}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href=""
                          onClick={() =>
                            updateCurrent(
                              current < Math.ceil(mentors.length / 12)
                                ? current + 1
                                : current,
                            )
                          }
                        >
                          <FaArrowRight />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Pagination>
            </div>
          </div>
        </section>
      </div>
        <Newsletter  title="How can I get free Pro memberships for mentors?"/>

      <Footer />
    </>
  );
};

export default Mentors;
