import React, { useEffect, useState } from "react";
import { Button } from "../../../common/components";
import { Image } from "../../../common/components/Image";
import { Link, useLocation } from "react-router-dom";
import { BRAND_LOGO_COLORED } from "../../../assets/images";
import { WORDS } from "../../../common/constants/wording";
import { NAV_ITEMS } from "../../../common/mocks";

type HeaderNavItem = (typeof NAV_ITEMS)[number];

export const Header = (): React.JSX.Element => {
  const [scrolled, setScrolled] = useState(false); // pour background
  const [hidden, setHidden] = useState(false); // pour cacher le header
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState<"fr" | "en" | "fon" | "yo">(() => {
    if (typeof window === "undefined") return "fr";
    const stored = window.localStorage.getItem("wt-language");
    if (stored === "en" || stored === "fon" || stored === "yo") return stored;
    return "fr";
  });
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langMenuRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isLangOpen]);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("wt-language", language);
  }, [language]);

  const languageLabel: Record<typeof language, string> = {
    fr: "Français",
    en: "English",
    fon: "Fon",
    yo: "Yorùbá"
  };

  const handleSelectLanguage = (code: typeof language) => {
    setLanguage(code);
    setIsLangOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`header ${scrolled ? "bg-header" : "bg-degrader"} ${
        hidden ? "header-hidden" : ""
      }`}
    >
      <div className="container-fluid d-flex-between header-inner">
        {/* Logo */}
        <div className="logo position-relative">
          <Image className="image" src={BRAND_LOGO_COLORED} alt="Logo" />
          <Link to="/accueil" className=""></Link>
        </div>

        {/* Navigation */}
        <nav
          className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
          id="navbar"
        >
          <ul className="nav-menu">
            {WORDS.header.nav_items.map((item: HeaderNavItem, index: number) => (
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
              <div className="header-actions">
                <div className="lang-switcher" ref={langMenuRef}>
                  <button
                    type="button"
                    className="lang-switcher-current"
                    onClick={() => setIsLangOpen((open) => !open)}
                    aria-haspopup="listbox"
                    aria-expanded={isLangOpen}
                  >
                    <span className="lang-pill">
                      <span className="lang-pill-code">
                        {language.toUpperCase()}
                      </span>
                    </span>
                    <span className="lang-switcher-label">
                      {languageLabel[language]}
                    </span>
                    <span className="lang-switcher-chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  {isLangOpen && (
                    <ul
                      className="lang-switcher-menu"
                      role="listbox"
                      aria-label="Choisir la langue"
                    >
                      {(["fr", "en", "fon", "yo"] as const).map((code) => (
                        <li key={code}>
                          <button
                            type="button"
                            className={`lang-switcher-option ${
                              language === code ? "is-active" : ""
                            }`}
                            onClick={() => handleSelectLanguage(code)}
                            role="option"
                            aria-selected={language === code}
                          >
                            <span className="lang-option-code">
                              {code.toUpperCase()}cool
                            </span>
                            <span className="lang-option-label">
                              {languageLabel[code]}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link to={WORDS.header.login_button.to}>
                  <Button className="btn animated-btn">
                    {WORDS.header.login_button.label}
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="hamburger-line text-bg-dark"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};