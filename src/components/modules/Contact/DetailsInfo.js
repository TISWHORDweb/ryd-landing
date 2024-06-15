import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


const DetailsInfo = () => {
    return (
        <div>
            <div className=" cotact__details">
                <div className="contact__header">
                    <h3>Always Here to Help you</h3>
                    <p>Feel free to reach out to us with any questions or inquiries. We're here to assist you and provide the information you need. Your satisfaction is our priority, and we look forward to hearing from you.</p>
                </div>

                <div className="contact__info">
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Location</h5>
                            <p className="mb-0">Durham, Greater Toronto Area, Ontario, Canada.</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Contact</h5>
                            <p className="mb-0">+18337371275</p>
                            {/* <p className="mb-0">(603) 555-0123</p> */}
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Email</h5>
                            <p className="mb-1">support@rydlearning.com</p>
                            <p className="mb-0">info@rydlearning.com</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faClock} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Hours of operation</h5>
                            <p className="mb-0">Monday - Friday: 09.00 - 20.00</p>
                            <p className="mb-0">Sunday & Saturday: 10.30 - 22..30</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DetailsInfo