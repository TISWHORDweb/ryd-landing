import Link from 'next/link'
import {useState} from "react";

const ContactForm = () => {

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [body, setBody] = useState("")

    const submitContact = () => {
        //add phone to body
        setBody(body + "\nPhone: " + phone+"\nEmail: "+email)
        alert("Thanks for contacting us !, We would get back to you on you request")
        window.location.href = `mailto:learning@rydlearning.com?subject=RYD_Learning_Contact&body=${body}.`
        window.location.reload()
    }

    return (
        <div className=" contact__form">
            <h3>Interested in Our Programs, Connect with Us.</h3>
            <p style={{display: "none"}}>Your email address will not be published. Required fields are marked.</p>
            <form action="#" className="account__form" onSubmit={submitContact}>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <input type="text" className="form-control" id="account-name" placeholder="Jhon Doe"
                                   required/>
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
                            <input type="email" className="form-control" id="account-email" placeholder="Email"
                                   required onChange={e => setEmail(e.target.value)}/>
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
                            <input onChange={e => setPhone(e.target.value)} type="number" className="form-control"
                                   id="account-mobile" placeholder="Enter phone number"
                                   required/>
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
                        <textarea onChange={e => setBody(e.target.value)} id="account-desc" className="form-control"
                                  rows="4" placeholder="Write a message..."
                                  cols="50"></textarea>
                        </div>
                    </div>
                </div>

                <div className="account__form-passcheck">
                    <div className="form-check" style={{display: "none"}}>
                        <input type="checkbox" className="form-check-input" checked={true} value="" id="terms-check"/>
                        <label htmlFor="terms-check" className="form-check-label">Accept <Link href=""> terms
                        </Link> and <Link href=""> privacy
                            policy</Link>.
                        </label>
                    </div>
                </div>

                <button type="submit" className="trk-btn trk-btn--rounded trk-btn--secondary1">Send Message</button>
            </form>
        </div>

    )
}

export default ContactForm
