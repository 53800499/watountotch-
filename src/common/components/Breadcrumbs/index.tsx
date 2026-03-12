import { Link, useLocation } from "react-router-dom";
import "../../../styles/breadcrumbs.css";
import type { FC } from "react";

const Breadcrumbs: FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="container">
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home me-1"></i> Accueil
            </Link>
          </li>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            const label = decodeURIComponent(name)
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase()); // beautify

            return (
              <li key={routeTo} className={isLast ? "active" : ""}>
                {/* {isLast ? label : <a href ={routeTo}>{label}</Link>} */}
                {isLast ? label : <Link to="#">{label}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
