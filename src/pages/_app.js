
import { useEffect } from 'react';
import AOS from 'aos';
import Meta from '../components/meta/Meta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import 'aos/dist/aos.css';
import '../styles/scss/style.scss'
export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Meta />
      <Component {...pageProps} />  
    </>
  )
}
