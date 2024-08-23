import Counter from '../../base/Counter';

const BannerShape = ({data}) => {


  return (
    <div className="banner__shape banner__shape--style1">
      <span className="banner__shape-item banner__shape-item--animation">
        <img src="/images/shape/home1/1.png" alt="roket" />
      </span>
      <span className="banner__shape-item banner__shpae-item--animation">
        <img src="/images/shape/home1/2.png" alt="book" />
      </span>
      <span className="banner__shape-item banner__shpae-item--animation">
        <img src="/images/shape/home1/3.png" alt="belon" />
      </span>
      <span className="banner__shape-item banner__shpae-item--animation">
        <img src="/images/shape/home1/4.png" alt="triangle" />
      </span>
      <span className="banner__shape-item banner__shpae-item--animation">
        <img src="/images/shape/home1/5.png" alt="circle" />
      </span>
      <div className="banner__shape-item">
        <div className="reviews">
          <div className="reviews__content">
            <p>
              <Counter
                className=".reviews__content"
                start={300}
                end={365}
                delay={30}
              />
              k+ enrolled students
            </p>
          </div>
          <div className="reviews__thumb">
     
            <ul>
              {data.map((item,index) => (
                <li key={index}>
                  <img src={item.img} alt="user image" />
                </li>
              ))}
              <li>
                <div className="count">
                  <p className="mb-0">
                    <Counter className="purecounter"
                      parentQuerySelector=".reviews__content"
                      start={0}
                      end={50}
                      delay={30}
                    />
                    <span className="plus">+</span>
                  </p>
                </div>
              </li>
            </ul>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerShape;
