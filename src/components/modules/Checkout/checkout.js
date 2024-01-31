import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import orderData from "../../../api/order.json";
import "aos/dist/aos.css";
const Checkout = () => {
  const [cartList, setCartList] = useState(orderData.cartList);

  return (
    <div>
      <section className="checkout padding-top padding-bottom">
        <div className="container">
        <div className="checkout__wrapper">
          <form action="" className="checkout__form">
            <div className="row g-5">
              <div className="col-lg-8">
                <CheckoutForm />
              </div>
              <div className="col-lg-4">
                <OrderSummary cartList={cartList} />
              </div>
            </div>
          </form>
        </div>
        </div>
      </section>
      
    </div>
  );
};

export default Checkout;
