import Preloader from "../components/headers/Preloader/Preloader";
import Headerfour from "../components/headers/Headerfour";
import BannerContent from "../components/modules/Home4/BannerContent";
import BannerIcon from "../components/modules/Home4/BannerIcon";
import Categories from "../components/modules/Home4/Categories";
import About from "../components/modules/Home4/About";
import PopularCourse from "../components/modules/Home4/PopularCourse";
import Story from "../components/modules/Home4/Story";
import Teams from "../components/modules/Home4/Teams";
import Gallery from "../components/modules/Home3/Gallery";
import Testimonials from "../components/modules/Home4/Testimonials";
import Blogs from "../components/modules/Home4/Blogs";
import Newsletterfour from "../components/modules/newsletter/Newsletterfour";
import Footerfour from "../components/footers/Footerfour";
import TelegramWidget from "../components/modules/chat-bot/TelegramWidget";
import { PromoPopup } from "../components/PromoPopup";

const index4 = () => {
  return (
    <>
      <Preloader className={"preloader--style4"} />
      <PromoPopup />
      <Headerfour />
      <BannerContent />
      <BannerIcon />
      <Categories />
      <About />
      <PopularCourse />
      <Story />
      <Teams />
      {/* <Gallery /> */}
      <Testimonials />
      {/* <Blogs /> */}
      <Newsletterfour />
      {/* <Chatbot /> */}
      <Footerfour />
      {/*<TelegramWidget />*/}
    </>
  );
};

export default index4;
