
import Header from '@/src/components/headers/Header';
import Footer from '@/src/components/footers/Footer';
const Layout = ({ children }) => {
   return (
      <>
         <Header/>
         {children}
         <Footer/>

      </>
   );
};

export default Layout;