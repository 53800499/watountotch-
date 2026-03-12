import { BRAND_LOGO_COLORED } from "../../../assets/images";
import { Image } from "../../../common/components/Image";
import { Link } from "react-router-dom";
import { WORDS } from "../../../common/constants/wording";
import { Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="site-footer">
      <div className="footer-container container-xxl grid">
        {/* <!-- Logo + short text --> */}
        <div className="footer-brand">
          <div className="logo">
            <Image
              className="image w-50"
              src={BRAND_LOGO_COLORED}
              alt="Watountotche - Logo"
            />
            <Link to="#" className="overlay-link"></Link>
          </div>
          <p className="tagline">{WORDS.footer.brand.tagline}</p>
        </div>

        {/* <!-- Navigation links --> */}
        <nav className="footer-nav" aria-label="Navigation principale">
          <h3 className="footer-title">{WORDS.footer.navigation.title}</h3>
          <ul>
            {WORDS.footer.navigation.links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* <!-- Contact info --> */}
        <div className="footer-contact" aria-label="Informations de contact">
          <h3 className="footer-title">{WORDS.footer.contact.title}</h3>
          <ul>
            <li>
              {WORDS.footer.contact.email_label}
              <Link to={`mailto:${WORDS.footer.contact.email_value}`}>
                {WORDS.footer.contact.email_value}
              </Link>
            </li>
            <li>
              {WORDS.footer.contact.phone_label}
              {WORDS.footer.contact.phone_value}
            </li>
            <li>
              {WORDS.footer.contact.address_label}
              {WORDS.footer.contact.address_value}
            </li>
          </ul>
        </div>

        {/* <!-- Newsletter --> */}
        <div className="footer-newsletter">
          <h3 className="footer-title">{WORDS.footer.newsletter.title}</h3>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              aria-label="Votre adresse e-mail"
            />
            <button type="submit">
              {WORDS.footer.newsletter.button_subscribe}
            </button>
          </form>
          <div className="footer-social" aria-label="Réseaux sociaux">
            <Link to="#" aria-label="Facebook" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>

            <Link to="#" aria-label="YouTube" className="social-link">
              <Youtube size={20} strokeWidth={1.5} fill="none" />
            </Link>

            <Link to="#" aria-label="Instagram" className="social-link">
              <Instagram size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{WORDS.footer.bottom.copyright}</p>
      </div>
    </footer>
  );
};
