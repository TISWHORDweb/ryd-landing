import React, { useEffect, useState } from 'react';

function AffiliateTable({ affiliates }) {
    const [programs, setPrograms] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [stats, setStats] = useState({
        totalPaid: 0,
        totalChildren: 0,
        uniqueChildren: 0,
        totalUnpaid: 0
    });
    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        if (affiliates) {
            setPrograms(affiliates.programs);
            setFilteredData(affiliates.programs);
            setFetched(true);

        }
    }, [affiliates]);

    useEffect(() => {
        const paidCohort = filteredData.filter(item => item.isPaid);
        const uniqueChildrenCount = countUniqueProgramUsers(programs);

        setStats({
            totalPaid: paidCohort.length,
            totalChildren: filteredData.length,
            uniqueChildren: uniqueChildrenCount,
            totalUnpaid: filteredData.length - paidCohort.length
        });
    }, [filteredData])

    const countUniqueProgramUsers = (data) => {
        if (!data || !Array.isArray(data)) {
            return 0;
        }
        return new Set(data.filter(program => program?.childId).map(program => program.childId)).size;
    };

    const handleCohortChange = (value) => {
        setSelectedCohort(value);
        setFilteredData(programs.filter(item => item.cohort.title === value));
    };

    const handleFilterChange = (value) => {
        setSelectedFilter(value);
        if (value === "all") {
            setFilteredData(programs);
        } else if (value === "true" || value === "false") {
            const status = value === "true";
            setFilteredData(programs.filter(item => item.isPaid === status));
        }
    };

    const CohortFilter = () => {
        if (!programs) return null;

        const cohorts = [...new Set(programs.map(item => item.cohort.title))];

        return (
            <select
                className="form-select form-select-lg shadow-sm fw-small"
                onChange={(e) => handleCohortChange(e.target.value)}
                value={selectedCohort}
                style={{ fontSize: "13px" }}
            >
                <option value="" className='fw-small text-sm'>Filter By Cohort</option>
                {cohorts.map(cohort => (
                    <option key={cohort} value={cohort}>{cohort}</option>
                ))}
            </select>
        );
    };

    const Filter = () => {
        if (!programs) return null;
        return (
            <select
                className="form-select form-select-lg shadow-sm fw-small"
                onChange={(e) => handleFilterChange(e.target.value)}
                value={selectedFilter}
                style={{ fontSize: "13px" }}
            >
                <option value="" className='fw-small text-sm'>Filter </option>
                <option value="all">All </option>
                <option value="true">Paid Only</option>
                <option value="false">Unpaid Only</option>
            </select>
        );
    };

    const StatusBadge = ({ isPaid }) => (
        <span className={`badge ${isPaid ? 'bg-success' : 'bg-danger'}`}>
            {isPaid ? 'Paid' : 'Unpaid'}
        </span>
    );

    return (
        <div className="container-fluid py-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="fw-bold mb-4" style={{ color: "#aa468e" }}>Affiliate Statistics</h2>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted mb-2">Total Paid</h6>
                            <h3 className="fw-bold text-success mb-0">{stats.totalPaid}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted mb-2">Unique Children</h6>
                            <h3 className="fw-bold text-primary mb-0">{stats.uniqueChildren}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted mb-2">Total Children</h6>
                            <h3 className="fw-bold text-info mb-0">{stats.totalChildren}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted mb-2">Total Unpaid</h6>
                            <h3 className="fw-bold text-danger mb-0">{stats.totalUnpaid}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="row mb-4">
            <div className="col-md-3">
                    <Filter />
                </div>
                <div className="col-md-3">
                    <CohortFilter />
                </div>
            </div>

            {/* Table Section */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0">Title</th>
                                    <th className="border-0">Coupon</th>
                                    <th className="border-0">Parent</th>
                                    <th className="border-0">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fetched && (
                                    filteredData.map((each, i) => (
                                        <tr key={i}>
                                            <td className="fw-medium">{each.cohort.title}</td>
                                            <td>
                                                <span className="badge bg-light text-dark">
                                                    {affiliates.code}
                                                </span>
                                            </td>
                                            <td>{`${each.child.parent.lastName} ${each.child.parent.firstName}`}</td>
                                            <td>
                                                <StatusBadge isPaid={each.isPaid} />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AffiliateTable;