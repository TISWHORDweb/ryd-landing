
import React from 'react';
import Header from '@/src/components/headers/Header';
import Footer from '@/src/components/footers/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const Layout = ({ children }) => {
   return (
      <div className='page1'>
         <Header/>
         {children}
         <Footer/>

      </div>
   );
};

export default Layout;