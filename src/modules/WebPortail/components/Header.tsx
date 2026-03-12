import React, { useEffect, useState } from "react";
import { Button } from "../../../common/components";
import { Image } from "../../../common/components/Image";
import { Link, useLocation } from "react-router-dom";
import { BRAND_LOGO_COLORED } from "../../../assets/images";
import { WORDS } from "../../../common/constants/wording";

export const Header = (): React.JSX.Element => {
  const [scrolled, setScrolled] = useState(false); // pour background
  const [hidden, setHidden] = useState(false); // pour cacher le header
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Descente → cacher
        setHidden(true);
      } else {
        // Montée → montrer
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    if (location.pathname === "/accueil") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
      setHidden(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`header ${scrolled ? "bg-header" : "bg-degrader"} ${
        hidden ? "header-hidden" : ""
      }`}
    >
      <div className="container-fluid d-flex-between">
        {/* Logo */}
        <div className="logo position-relative">
          <Image className="image" src={BRAND_LOGO_COLORED} alt="Logo" />
          <Link to="/accueil" className="overlay-link"></Link>
        </div>

        {/* Navigation */}
        <nav className="navbar" id="navbar">
          <ul className="nav-menu">
            {WORDS.header.nav_items.map((item, index) => (
              <li
                key={index}
                className={`${item.dropdown ? "dropdown" : ""} ${
                  isActive(item.to) ? "active" : ""
                }`}
              >
                {item.dropdown ? (
                  <>
                    <span
                      className={`dropdown-toggle ${
                        isActive(item.to) ? "active" : ""
                      }`}
                      data-dropdown="pages-dropdown"
                    >
                      {item.label}
                    </span>
                    <ul className="dropdown-menu" id="pages-dropdown">
                      {item.dropdown.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className={isActive(sub.to) ? "active" : ""}
                        >
                          <a href={sub.to} className="dropdown-item">
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.to}
                    className={`nav-link ${isActive(item.to) ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="nav-login">
              <Link to={WORDS.header.login_button.to}>
                <Button className="btn animated-btn">
                  {WORDS.header.login_button.label}
                </Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button className="mobile-menu-toggle" id="mobile-menu-toggle">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </Button>
      </div>
    </header>
  );
};