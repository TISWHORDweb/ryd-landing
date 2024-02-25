import { useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomInput from "./CustomInput";

const Newsletterfour = () => {

  const postUrl = `https://rydlearning.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  useEffect(() => {
    document
      .getElementById("custom-footer")
      ?.classList.add("footer__top--style1");
  }, []);

  
  return (
    <div className="newsletter" style={{ marginTop: '150px'}}>
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <div
              className="newsletter__content-inner newsletter__content-inner--style4 text-center"
              style={{
                backgroundImage: 'url(images/footer/5.png)',
              }}
            >
              <h2 className="style2-h2">Get The Latest News On Our Courses</h2>

              <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message }) => (
                  <CustomInput 
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletterfour;
