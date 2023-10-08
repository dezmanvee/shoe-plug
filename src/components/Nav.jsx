import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useRef, useEffect } from "react";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(true);

  const navContainerRef = useRef(null);

  useEffect(() => {
    const navHeight = navContainerRef.current.getBoundingClientRect().height;

    const handleScroll = () => {
      let scrollHeight = window.scrollY;
      if (scrollHeight > navHeight) {
        navContainerRef.current.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
      } else {
        navContainerRef.current.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="navHeader"
      className="padding-x py-8 fixed z-10 w-full bg-white"
      ref={navContainerRef}
    >
      <nav className="flex justify-between items-center max-container max-lg:h-auto max-lg:items-start max-lg:relative">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`max-lg:bg-black max-lg:bg-opacity-70 max-lg:bg-blend-darken max-lg:z-10 max-lg:w-full max-lg:h-screen max-lg:p-8 max-lg:fixed right-0 top-0 left-0 bottom-0 ${
            mobileToggle ? "max-lg:hidden" : "max-lg:block"
          }`}
        >
          <div className="flex-1 flex justify-center items-center gap-16 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:bg-white max-lg:fixed max-lg:w-full max-lg:gap-12 max-lg:p-8 max-lg:h-full right-0 top-0">
            {navLinks.map((link) => {
              const { href, label } = link;
              return (
                <li
                  key={label}
                  onClick={() => {
                    setMobileToggle(!mobileToggle);
                  }}
                >
                  <a
                    href={href}
                    className="font-montserrat leading-normal text-lg text-slate-gray max-lg:font-bold"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="font-montserrat leading-normal text-lg max-lg:hidden">
          <a href="/">Sign in / Explore now</a>
        </div>
        {/* hamburger */}
        <div
          key={1}
          className={`hidden z-10 cursor-pointer ${
            mobileToggle === false ? "max-lg:hidden" : "max-lg:block"
          }`}
        >
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => {
              setMobileToggle(!mobileToggle);
            }}
          />
        </div>

        {/* close */}
        <div
          key={2}
          className={`hidden z-10 cursor-pointer ${
            mobileToggle === true ? "max-lg:hidden" : "max-lg:block"
          }`}
        >
          <p
            onClick={() => {
              setMobileToggle(!mobileToggle);
            }}
          >
            <GrClose className="text-3xl" />
          </p>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
