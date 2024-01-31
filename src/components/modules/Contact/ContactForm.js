import Link from 'next/link'
const ContactForm = () => {
  return (
<div className=" contact__form">
        <h3>Ready To Get Started?</h3>
        <p>You email address will not be published. Required fields are marked.</p>
        <form action="" className="account__form">
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="input-group">
                        <input type="text" className="form-control" id="account-name" placeholder="Jhon Doe" required/>
                        <div className="valid-tooltip">
                            Looks good!
                        </div>
                        <div className="invalid-tooltip">
                            Please enter a full name
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-group">
                        <input type="email" className="form-control" id="account-email" placeholder="Email" required/>
                        <div className="valid-tooltip">
                            This email is valid
                        </div>
                        <div className="invalid-tooltip">
                            Please enter a valid email
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-group">
                        <input type="number" className="form-control" id="account-mobile" placeholder="Enter number" required/>
                        <div className="valid-tooltip">
                            This mobile is valid
                        </div>
                        <div className="invalid-tooltip">
                            Please enter a valid number
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="input-group">
                        <textarea id="account-desc" className="form-control" rows="4" placeholder="Write a message..."
                            cols="50"></textarea>
                    </div>
                </div>
            </div>

            <div className="account__form-passcheck">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="terms-check"/>
                    <label htmlFor="terms-check" className="form-check-label">Accept <Link href=""> terms
                        </Link> and <Link href=""> privacy
                            policy</Link>.
                    </label>
                </div>
            </div>

            <button type="submit" className="trk-btn trk-btn--rounded trk-btn--secondary1">Send
                Message</button>
        </form>
    </div>

  )
}

export default ContactForm