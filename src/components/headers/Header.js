import { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
const Header = () => {
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
    <header
      className={`header-section brand-1  ${
        scrollPosition > 100 ? "header-fixed fadeInUp" : ""
      } `}
    >
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-start header-start--style1">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="menu-area">
                <ul
                  className={
                    activeMenu
                      ? "menu menu--style1 active"
                      : "menu menu--style1"
                  }
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="">
                    <Link href="/courses">
                      Courses
                    </Link>
                    {/* <ul className="submenu">
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
                    </ul> */}
                  </li>
                  {/* <li className="menu-item-has-children">
                    <Link href="" onClick={toggleActive}>
                      Blogs
                    </Link>
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
                  </li> */}
                  {/* <li className="menu-item-has-children">
                    <Link href="" onClick={toggleActive}>
                      Pages
                    </Link>
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
                        <Link href="/forget-password">Reset Password</Link>
                      </li>
                      <li>
                        <Link href="/404">404 Error</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-end">
              <div className="menu-area">
                <div className="header-btn">
                  <Link
                    href="https://app.rydlearning.com/auth-register"
                    className="trk-btn trk-btn--rounded trk-btn--primary1"
                  >
                    <span>Sign Up</span>
                  </Link>
                </div>
                <div
                  className={
                    activeMenu
                      ? "header-bar d-xl-none active"
                      : "header-bar d-xl-none"
                  }
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

export default Header;
