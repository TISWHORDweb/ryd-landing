import Config from "@/src/config";
import Head from "next/head";
import PageHeader from "../Home/PageHeader";
import Link from "next/link";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartHome = () => {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <PageHeader
        title="Cart"
        subtitle="Cart"
        image={`${Config.public.baseUrl}images/bg/home1/2.png`}
      />
      <div className="cart padding-top padding-bottom">
        <div className="container" data-aos="fade-up">
          <div className="cart__wrapper">
            <div className="row g-5 justify-content-center">
              <div className="col-xl-8">
                <div
                  className="cart__top"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <table>
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="course-item">
                          <div className="c-thumb rounded">
                            <Link href="">
                              <img src="/images/course/1.png" alt="course" />
                            </Link>
                          </div>
                          <div className="c-content">
                            <Link href="">Web design dourse</Link>
                            <div className="c-reviews">
                              <ul>
                                <li>
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                              </ul>
                              <p>(32 reviews)</p>
                            </div>
                          </div>
                        </td>
                        <td className="unit-price">
                          $20 <del className="del">$30</del>
                        </td>
                        <td className="course-delete">
                          <Link href="">
                            <FontAwesomeIcon icon={faTrashCan} size="sm" />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="course-item">
                          <div className="c-thumb rounded">
                            <Link href="">
                              <img src="/images/course/2.png" alt="course" />
                            </Link>
                          </div>
                          <div className="c-content">
                            <Link href="">Graphic design course</Link>
                            <div className="c-reviews">
                              <ul>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" className="mute" />
                                </li>
                              </ul>
                              <p>(44 reviews)</p>
                            </div>

                          </div>
                        </td>
                        <td className="unit-price">
                          $200 <del className="del">$250</del>
                        </td>
                        <td className="course-delete">
                          <Link href="">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="course-item">
                          <div className="c-thumb rounded">
                            <Link href="">
                              <img src="/images/course/3.png" alt="course" />
                            </Link>
                          </div>
                          <div className="c-content">
                            <Link href="">Marketing course</Link>
                            <div className="c-reviews">

                              <ul>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" className="mute" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" className="mute" />
                                </li>
                              </ul>

                              <p>(33 reviews)</p>
                            </div>

                          </div>
                        </td>
                        <td className="unit-price">
                          $100 <del className="del">$150</del>
                        </td>
                        <td className="course-delete">
                          <Link href="">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="course-item">
                          <div className="c-thumb rounded">
                            <Link href="">
                              <img src="/images/course/4.png" alt="course" />
                            </Link>
                          </div>
                          <div className="c-content">
                            <Link href="">SEO course</Link>
                            <div className="c-reviews">
                              <ul>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                              </ul>
                              <p>(12 reviews)</p>
                            </div>

                          </div>
                        </td>
                        <td className="unit-price">
                          $120 <del className="del">$150</del>
                        </td>
                        <td className="course-delete">
                          <Link href="">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="course-item">
                          <div className="c-thumb rounded">
                            <Link href="">
                              <img src="/images/course/5.png" alt="course" />
                            </Link>
                          </div>
                          <div className="c-content">
                            <Link href="">Software development</Link>
                            <div className="c-reviews">
                              <ul>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} size="sm" className="mute" />
                                </li>
                              </ul>
                              <p>(20 reviews)</p>
                            </div>

                          </div>
                        </td>
                        <td className="unit-price">
                          $200 <del className="del">$220</del>
                        </td>
                        <td className="course-delete">
                          <Link href="">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-xl-4 col-lg-8 col-md-10">
                <div
                  className="cart__bottom"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="cart__bottom-shipingbox">
                    <div className="cart-overview">
                      <h4>Cart Totals</h4>
                      <div className="cart__bottom-coupon">
                        <p>Apply Coupon</p>
                        <form action="/" className="coupon">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter coupon" />
                            <button className="trk-btn trk-btn--border trk-btn--apply">Apply</button>
                          </div>
                        </form>
                      </div>
                      <ul>
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ 300.00</p>
                        </li>
                        <li>
                          <span className="pull-left">Discount </span>
                          <p className="pull-right">$ 20.00</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">$ 280.00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cart__bottom-checkoutbox">
                    <Link
                      href="/check-out"
                      className="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
                    >
                      Process To Checkout
                    </Link>
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

export default CartHome;
