import React, { useEffect, useState } from 'react'

function AffiliateTable({ affiliates }) {
    const [programs, setPrograms] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [fetched, setFetched] = useState(false)
    const [totalPaid, setTotalPaid] = useState()
    const [uniqueChild, setUniqueChild] = useState()
    const [totalUnpaid, setTotalUnpaid] = useState()
    const [selectedCohort, setSelectedCohort] = useState(null);
    const [clicked, setClicked] = useState(false)
    // const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (affiliates) {
            setPrograms(affiliates.programs)
            setFetched(true)
            setFilteredData(affiliates.programs)
            const paidCohort = affiliates.programs.filter(item => item.isPaid === true)
            const unPaidCohort = affiliates.programs.filter(item => item.isPaid === false)
            setTotalPaid(paidCohort.length)
            setUniqueChild(countUniqueProgramUsers(affiliates))
            setTotalUnpaid(unPaidCohort.length)
        }
    }, [affiliates])

    const countUniqueProgramUsers = (coupon) => {
        if (!coupon?.programs || !Array.isArray(coupon.programs)) {
          return 0;
        }
      
        const uniqueUserIds = new Set(
          coupon.programs
            .filter(program => program?.childId)
            .map(program => program.childId)
        );
      
        return uniqueUserIds.size;
      };
    
    const handleCohortChange = (cohort) => {
        if (cohort === "all") {
            setFilteredData(programs)
        } else if (cohort === "true" || cohort === "false") {
            const status = cohort === "true" ? true : false
            setFilteredData(programs.filter(item => item.isPaid === status))
        } else {
            console.log("second")
            setFilteredData(programs.filter(item => item.cohort.title === cohort));
        }
        setClicked(true)
    };

    function CohortFilter({ programs, onCohortChange }) {
        if (programs) {
            const cohorts = [...new Set(programs.map(item => item.cohort.title))];

            const handleChange = (selectedOption) => {
                console.log(selectedOption)
                onCohortChange(selectedOption);
                setSelectedCohort(selectedOption)
            };
            console.log(cohorts)
            return (
                <select name="cars" className="form-select" onChange={(e) => handleChange(e.target.value)}>
                    <option value="">{selectedCohort ? selectedCohort === "true" ? "Paid" : selectedCohort || selectedCohort === "false" ? "Unpaid" : selectedCohort : "Filter By"}</option>
                    <option value="all">All</option>
                    <option value={true}>Paid</option>
                    <option value={false}>Unpaid</option>
                    {cohorts.map(cohort => (
                        <option value={cohort} >{cohort}</option>
                    ))}
                </select >
            );
        }
    }

    const statusCheck = (status) => {
        if (status) {
            return (
                <span className='text-success'>Paid</span>
            )
        } else {
            return (
                <span className='text-danger'>Unpaid</span>
            )
        }
    }
    return (
        <div><div className=" table-responsive">
            <div className="mb-4">
                <h3>Affiliate Statistic</h3>
            </div>
            <div
                    className="course__topbar-left col-md-4"
                // data-aos="fade-right"
                // data-aos-duration="800"
                >
                    <CohortFilter programs={programs} onCohortChange={handleCohortChange} />
                </div>
            <div className="row align-items-center mb-4 mt-3">
                <div className="col-md-4">
                    <p className='m-0'>Total Paid : <span>{totalPaid ? totalPaid : "0"}</span></p>
                </div>
                <div className="col-md-4">
                    <p className='m-0'>Unique Children : <span>{uniqueChild ? uniqueChild : "0"}</span></p>
                </div>
                <div className="col-md-4">
                    <p className='m-0'>Total Unpaid : <span>{totalUnpaid ? totalUnpaid : "0"}</span></p>
                </div>
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
                                            {filteredData?.map((each, i) => (
                                                <tr>
                                                    <td>{each.cohort.title}</td>
                                                    <td>{affiliates.code}</td>
                                                    <td>{each.child.parent.lastName + " " + each.child.parent.firstName}</td>
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