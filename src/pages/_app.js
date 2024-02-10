
import { useEffect } from 'react';
import AOS from 'aos';
import Meta from '../components/meta/Meta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import 'aos/dist/aos.css';
import '../styles/scss/style.scss'
import Script from 'next/script';
export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Meta />
      <Component {...pageProps} />  
      <Script 
        strategy="lazyOnload" 
        src='https://embed.tawk.to/65c7685d0ff6374032cb8ed0/1hm9evbt0' 
      />
    </>
  )
}
