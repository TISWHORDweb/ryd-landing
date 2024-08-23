import $ from 'jquery';
import { useEffect } from 'react';
const Preloader = ({className}) => {
    useEffect(() => {
        $(".preloader").show();
 
       setTimeout(function() {
           $(".preloader").fadeOut();
         }, 400);

   }, []);
  return (
    <div className={`preloader ${className}`}>
        <div className="preloader__book">
            <div className="inner">
                <div className="left"></div>
                <div className="right"></div>
                <div className="middle"></div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Preloader