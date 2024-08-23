import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Headerfour = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter()

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    router.events.on('routeChangeStart', removeActive);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeStart', removeActive);
    };
  }, [router.events]);





  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove('open')
      item.querySelector('.submenu').style.display = 'none'
    })
  }
  function toggleSearchField() {
    document.querySelector(".searchbar")?.classList.toggle("show");
  }

  // ...........main menu...............

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
    closeAllMenus()
  }
  //............submenu...............
  function removeActive() {
    window.onload = function() {
      const element = document.getElementById("menu");
      if (element) {
        element.classList.remove("active");
      }
      const icon = document.getElementById("icon");
      if (icon) {
        icon.classList.remove("active");
      }
    };
  }


  function toggleActive(event) {
    event.preventDefault()
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle('open')
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === 'none') {
        submenu.style.display = "block"
      } else {
        submenu.style.display = "none"
      }
    }
  }
return (

    <>

    <header
    className={`header-section brand-4 home4 ${scrollPosition > 100 ? 'header-fixed fadeInUp' : ""} `}
  >
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-start header-start--style1">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo/4.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <ul className= {
                    activeMenu
                      ? "menu menu--style1 active"
                      : "menu menu--style1"
                  }>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li className=''>
                  <Link href="/courses">Courses</Link>
                  {/* <ul className="submenu">
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                     <li>
                      <Link href="/course-details">Courses Details</Link>
                    </li>
                     <li>
                      <Link href="/course-category"
                      >Courses Category</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-end">
              <div className="menu-area">
                <div className="header-btn">
                  <Link href="https://app.rydlearning.com/parent/sign-up"
                    className="trk-btn trk-btn--rounded trk-btn--primary4 trk-btn--style2">
                    <span>Enroll Now</span>
                  </Link>
                </div>


                <div className={activeMenu ? "header-bar d-xl-none home4 active" : "header-bar d-xl-none home4"} onClick={toggleMenu} >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </header>
  <div className="searchbar">
      <div className="searchbar__wrapper">
        <div className="searchbar__inner">
          <form className="form form-subscribe">
            <div className="input-group">
              <input
                type="email"
                className="form-control style1"
                placeholder="Search now..." />
              <span className="input-group-btn">
                <button
                  className="trk-btn search-btn trk-btn--primary3"
                  type="submit"
                >
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="searchbar__close" onClick={toggleSearchField}>X</div>
    </div>
    </div>

</>
);
};
export default Headerfour;
