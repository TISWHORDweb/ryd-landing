import Counter from '../../base/Counter'
const data = [
    {
        icon: "/images/counter/home3/1.png",
        value: "10",
        label: "Student",
        delay: 150,
    },
    {
        icon: "/images/counter/home3/2.png",
        value: "20",
        label: "Quality Courses",
        delay: 75,
    },
    {
        icon: "/images/counter/home3/3.png",
        value: "10",
        label: "Expreience",
        delay: 150,
    },
    {
        icon: "/images/counter/home3/4.png",
        value: "10",
        label: "Achievement",
        delay: 150,
    },
];
const CounterThree = () => {
    return (
        <div>
            <div className='counter counter--style2 brand-3'>
                <div className='container'>
                    <div className="counter__wrapper">
                        <div className="row g-5">
                            {
                                data.map((item, index) => (
                                    <div className="col-md-3 col-6" key={index}>
                                        <div className="counter__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                            <div className="counter__item-inner">
                                                <div className="counter__item-thumb">
                                                    <img src={item.icon} alt="count-icon" />
                                                </div>
                                                <div className="counter__item-content">
                                                    <h3>
                                                        <Counter parentQuerySelector=".counter__wrapper" className="counter purecounter" start={0} end={item.value} data = {data} delay={item.delay}/>
                                                        {index==2? "Y+": "K+"}
                                                    </h3>
                                                    <p>{item.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterThree