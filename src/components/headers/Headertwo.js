import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Headertwo = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    router.events.on("routeChangeStart", removeActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeStart", removeActive);
    };
  }, [router.events]);

  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".submenu").style.display = "none";
    });
  }

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
    closeAllMenus();
  };
  //............submenu...............
  function removeActive() {
    window.onload = function () {
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
    event.preventDefault();
    const mediaQuery = window.matchMedia("(max-width: 991px)");

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle("open");
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === "none") {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    }
  }

  return (
    <header className={`header-section home2 ${scrollPosition > 100 ? "header-fixed fadeInUp" : ""}`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-start header-start--style2">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/2.png" alt="logo" />
                </Link>
              </div>
              <div className={`menu-area `}>
                <ul className={`menu menu--style2 ${activeMenu ? "active" : ""}`}>
                  <li className="menu-item-has-children">
                    <Link href="" onClick={toggleActive}>Homes</Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/">Home 1</Link>
                      </li>
                      <li>
                        <Link href="/index2">Home 2</Link>
                      </li>
                      <li>
                        <Link href="/index3">Home 3</Link>
                      </li>
                      <li>
                        <Link href="/index4">Home 4</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="" onClick={toggleActive}>Courses</Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/courses">Courses</Link>
                      </li>
                      <li>
                        <Link href="/course-details">Courses Details</Link>
                      </li>
                      <li>
                        <Link href="/course-category">Courses Category</Link>
                      </li>
                      <li>
                        <Link href="/mentors">Mentors</Link>
                      </li>
                      <li>
                        <Link href="/mentor-details">Mentor Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="" onClick={toggleActive}>Blogs</Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/blogs2">Blogs 2</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="" onClick={toggleActive}>Pages</Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link href="/check-out">Checkout</Link>
                      </li>
                      <li>
                        <Link href="/signup">Sign Up</Link>
                      </li>
                      <li>
                        <Link href="/signin">Sign In</Link>
                      </li>
                      <li>
                        <Link href="/forgot-password">Reset Password</Link>
                      </li>
                      <li>
                        <Link href="/about">404 Error</Link>
                      </li>
                    </ul>
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
                  <Link href="/signup" className="text-btn">
                    <span>Sign Up</span>
                  </Link>
                  <Link href="/signin" className="trk-btn trk-btn--border trk-btn--secondary2">
                    {"Get Started  "} 
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>

                {/* toggle icons */}
                <div
                  className={`header-bar d-xl-none home2 ${activeMenu ? "active" : ""}`}
                  onClick={toggleMenu}
                >
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
  );
};

export default Headertwo;
