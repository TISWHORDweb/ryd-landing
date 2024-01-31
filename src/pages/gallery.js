import PageHeader from "../components/modules/Home/PageHeader";
import Gallery from "../components/modules/Gallery/Gallery";
import Headerfour from "../components/headers/Headerfour";
import Footerfour from "../components/footers/Footerfour";
import Newsletter from "../components/modules/Gallery/Newsletter";
const gallery = () => {
  return (
    <>
      <Headerfour />
      <PageHeader
        title="Gallery"
        subtitle="Gallery"
        image='images/bg/home1/4.png'
      />
      
      <Gallery />
      <Newsletter />
      <Footerfour />

    </>
  );
};

export default gallery;
