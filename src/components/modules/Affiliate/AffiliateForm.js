import Link from 'next/link'
import { useState } from "react";

const AffiliateForm = ({HandleAffiliate}) => {

    const [code, setCode] = useState("")
    const [accessKey, setAccesskey] = useState("")



    return (
        <div className=" contact__form">
            <h3>View parent that've use the coupon code </h3>
            <p style={{ display: "none" }}> Required fields are marked.</p>
            <form action="#" className="account__form">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <input onChange={e => setCode(e.target.value)} type="text" className="form-control"
                                id="account-mobile" placeholder="Enter coupon code"
                                required />
                            <div className="valid-tooltip">
                                This coupon is valid
                            </div>
                            <div className="invalid-tooltip">
                                Please enter a valid access code
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="input-group">
                            <input onChange={e => setAccesskey(e.target.value)} type="text" className="form-control"
                                id="account-mobile" placeholder="Enter access code"
                                required />
                            <div className="valid-tooltip">
                                This coupon is valid
                            </div>
                            <div className="invalid-tooltip">
                                Please enter a valid access code
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="account__form-passcheck">
                    <div className="form-check" style={{display: "none"}}>
                        <input type="checkbox" className="form-check-input" checked={true} value="" id="terms-check"/>
                        <label htmlFor="terms-check" className="form-check-label">Accept <Link href=""> terms
                        </Link> and <Link href=""> privacy
                            policy</Link>.
                        </label>
                    </div>
                </div> */}

                <button type="submit" className="trk-btn trk-btn--rounded trk-btn--secondary1 mt-4"  onClick={(e)=>HandleAffiliate(e,code,accessKey)}>Check</button>
            </form>
        </div>

    )
}

export default AffiliateForm
