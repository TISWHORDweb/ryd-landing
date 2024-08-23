const CheckoutForm = () => {
  return (
    <div> <div className="checkout__details" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
        <div className="row g-4">
            <div className="col-lg-12">
                <div className="checkout__title">
                    <h5>Checkout</h5>
                </div>
                <div className="checkout__subtitle">
                    <p>Billing Details</p>
                </div>

            </div>
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" id="first-name" placeholder="First name*" required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" id="last-name" placeholder="Last name*" required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" id="address" placeholder="Address*" required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" id="address2" placeholder="Address 2" required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" id="city" placeholder="City/Town*" required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" id="zip-code" placeholder="Zip Code*" required />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="input-group">
                    <textarea id="account-desc" className="form-control" rows="4" placeholder="Write a message..."
                        cols="50"></textarea>
                </div>
            </div>

            <div className="account__form-passcheck">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="terms-check" />
                    <label htmlFor="terms-check" className="form-check-label">
                        Create an account?
                    </label>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default CheckoutForm