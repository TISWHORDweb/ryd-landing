import React from 'react'

function Certificate() {
    return (
        <div>
            <div className="Certificate">
                <center>
                    <img src="/images/ryd.png" className='background' alt="" />
                    <div className="text">
                        <img src="/images/favicon.png" alt="" />
                        <h2 className='mt-5 mb-3'>Certificate of Completion</h2>
                        <h3>This certifies that</h3>
                        <h2 className='mt-5'>Kelvin Holsgerg</h2>
                        <hr className='long' />
                        <p className=''>has completed</p>
                        <h1 className='mt-5'>Advance Level 2 <br />
                            Basic of Python Programming</h1>
                            <div className="bottom">
                                <div className="c mt-5">
                                    <hr className='short' />
                                    <span>Signature </span>
                                </div>
                                <div className=" mt-5">
                                    <hr className='short' />
                                    <span> Date</span>
                                </div>
                            </div>
                      
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Certificate