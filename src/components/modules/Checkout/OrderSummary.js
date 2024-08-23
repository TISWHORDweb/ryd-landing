import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const OrderSummary = ({ cartList }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalPrice();
  }, [cartList]);
  const totalPrice = () => {
    let totalPrice = 0;
    cartList.forEach((el) => {
      totalPrice += el.discounted_price;
    });
    setTotal(totalPrice);
  };


  return (
    <div>
      <div
        className="order"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="checkout__title">
          <h5>Order Summary</h5>
        </div>
        <div className="order__details table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">
                  <table className="table table-borderless">
                    <tbody>
                      {cartList.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="o-info">
                              <img src={item.thumbnail} alt="course" />
                              <div className="o-details">
                                <Link href='/course-details'>{item.title}</Link>
                                <div className="c-reviews">
                                  <ul>
                                    {

                                    }
                                    {[...Array(5)].map((_, index) => (
                                      <li key={index}>
                                        <FontAwesomeIcon icon={faStar}
                                          className={index < item.rating ? "" : "mute"} />
                                      </li>
                                    ))}
                                  </ul>
                                  <p>({item.rating_count} reviews)</p>
                                </div>

                              </div>
                            </div>
                          </td>
                          <td>{`$${item.discounted_price}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th scope="row">Sub Total</th>
                <td>{`$${total.toFixed(2)}`}</td>
              </tr>
              <tr>
                <th scope="row">Discount</th>
                <td>$40.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>
                  {"Total ( USD )"}
                  <p>VAT included, where applicable</p>
                </th>
                <td><strong>{`$${(total - 40).toFixed(2)}`}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="order__option">
          <div className="order__option-title">
            <p>Payment</p>
          </div>
          <div className="order__option-item">
            <div className="form-radio">
              <input className="form-radio" type="radio" name="payment-radio" value="" id="card" />
              <label htmlFor="card" className="form-check-label" >
                &nbsp;Credit/Debit Card
              </label>
            </div>
            <div className="thumb">
              <img src="/images/icon/card/1.png" alt="payment iocn" />
              <img src="/images/icon/card/2.png" alt="payment iocn" />
            </div>
          </div>
          <div className="order__option-item">
            <div className="form-radio">
              <input className="form-radio" type="radio" name="payment-radio" value="" id="paypalCheck" />
              <label htmlFor="paypalCheck" className="form-check-label" >
                &nbsp;Paypal
              </label>
            </div>
            <div className="thumb">
              <img src="/images/icon/card/3.png" alt="payment iocn" />
            </div>
          </div>
          <div className="order__option-item">
            <div className="form-radio">
              <input className="form-radio" type="radio" name="payment-radio" value="" id="cash" />
              <label htmlFor="cash" className="form-check-label" >
                &nbsp;Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        <div className="order__check mt-5">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="data" />
            <label htmlFor="data" className="form-check-label" >
              Your personal data will be used to process your order.
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
