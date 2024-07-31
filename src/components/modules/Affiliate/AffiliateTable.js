import React, { useEffect, useState } from 'react'

function AffiliateTable({ affiliates }) {
    const [programs, setPrograms] = useState([])
    const [fetched, setFetched] = useState(false)
    useEffect(() => {
        if (affiliates) {
            setPrograms(affiliates.programs)
            setFetched(true)
        }
    }, [affiliates])

    const statusCheck = (status) =>{
        if(status){
            return (
                <span className='text-success'>Paid</span>
            )
        }else{
            return (
                <span className='text-danger'>Unpaid</span>
            )
        }
    }
    return (
        <div><div className=" table-responsive">
            <div className="contact__header">
                <h3>Affiliate Statistic</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Coupon</th>
                        <th>Parent</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="4">
                            <table className="table table-borderless">
                                <tbody>
                                    {fetched ?
                                        <>
                                            {programs?.map((each, i) => (
                                                <tr>
                                                    <td>{each.cohort.title}</td>
                                                    <td>{affiliates.code}</td>
                                                    <td>{each.child.parent.lastName+" "+each.child.parent.firstName}</td>
                                                    <td>{statusCheck(each.isPaid)}</td>
                                                </tr>
                                            ))}
                                        </>
                                        : <tr>
                                            <td>-----</td>
                                            <td>-----</td>
                                            <td>-----</td>
                                            <td>-----</td>
                                        </tr>
                                    }

                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AffiliateTable