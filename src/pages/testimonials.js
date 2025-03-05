import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from "@/src/Network";
import axios from "axios";
import HeaderBg from "../components/headers/HeaderBg";
import Newsletter from "../components/modules/Gallery/Newsletter";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [countries, setCountries] = useState([]);

    // Fetch testimonials
    const fetchTestimonial = async () => {
        try {
            const response = await axios.get(`${baseUrl}/common/testimonial/all`);
            setTestimonials(response.data.data);

            // Extract unique countries for the dropdown
            const uniqueCountries = [...new Set(response.data.data.map(item => item.parentId ? item.parent.country : item.country))];
            setCountries(["All", ...uniqueCountries]);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchTestimonial();
    }, []);

    // Filter testimonials based on search and country
    const filteredTestimonials = testimonials.filter((item) => {
        const matchesSearch = item.testimonial.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountry === "All" || (item.parentId ? item.parent.country === selectedCountry : item.country === selectedCountry);
        return matchesSearch && matchesCountry;
    });


    return (
        <>
            <Header />
            <PageHeader
                title="Testimonial"
                subtitle="Testimonial"
                image='../../../images/bg/home1/2.png'
            />

            <section className='testimonial testimonial--style1 padding-top padding-bottom '>
                <div className='container'>
                    <div className="section-header text-center section-header--dark">
                        <h2 className='style2-h2 pink '>What Parents Say!!!</h2>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="testimonial__filters mb-5">
                        <input
                            type="text"
                            placeholder="Search testimonials..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-control "
                        />
                        <select
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="form-control"
                        >
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Testimonials List */}
                    <div className="testimonial__list">
                        {filteredTestimonials.length > 0 ? (
                            filteredTestimonials.map((item, index) => (
                                <div key={index} className="testimonial__card mb-4">
                                    <div className="testimonial__card-inner p-4">
                                        <div className="testimonial__card-content">
                                            <span className="testimonial__quote-icon orange">
                                                <FontAwesomeIcon icon={faQuoteLeft} />
                                            </span>
                                            <blockquote className="blockquote">
                                                <p>{item.testimonial}</p>
                                                <h4 className="mt-3 pink">
                                                    {item.parentId ? `${item.parent.firstName} ${item.parent.lastName}` : item.name}
                                                </h4>
                                                <small>
                                                    {item.parentId ? `${item.parent.state}, ${item.parent.country}` : item.country}
                                                </small>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No testimonials found.</p>
                        )}
                    </div>
                </div>
            </section>
            <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
                <div className="container">
                    <Newsletter title="Our mission is to transform learning into an exhilarating journey of discovery." />
                </div>
            </div>
            <Footer /></>
    );
};

export default Testimonial;