import { useState } from "react";
import { WORDS } from "../../../../common/constants/wording";
import { CULTURE_DISHES_MOCK, type CultureDishBadgeVariant } from "../../../../common/mocks/home_page";
import { ModalRecette } from "../CultureAndGastronomy/ModalRecette";
import { Button } from "../../../../common/components";

export const CultureGastroSection = () => {
  const { title, subtitle } = WORDS.home_page.gastronomy_section;

  const getBadgeStyle = (variant: CultureDishBadgeVariant) => {
    if (variant === "yellow") {
      return { background: "var(--benin-yellow)", color: "#000" };
    }
    if (variant === "red") {
      return { background: "var(--benin-red)" };
    }
    return undefined;
  };
    const [open, setOpen] = useState(false);

  return (
    <>
      <section id="culture-gastro popular-packages-tours">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="divider"></div>
          {subtitle && (
            <p style={{ marginTop: "15px", color: "#666" }}>{subtitle}</p>
          )}
        </div>

        <div className="culture-tabs">
          <button className="tab-btn active text-white">Gastronomie</button>
          <button className="tab-btn inactive">Arts & Rites</button>
          <button className="tab-btn inactive">Communauté</button>
        </div>

        <div className="food-grid">
          {CULTURE_DISHES_MOCK.map((dish) => (
            <div className="food-card" key={dish.title}>
              <span className="food-badge" style={getBadgeStyle(dish.badgeVariant)}>
                {dish.badgeLabel}
              </span>

              {dish.href ? (
                <a href={dish.href}>
                  <img
                    src={dish.imageUrl}
                    alt={dish.imageAlt}
                    className="food-img"
                  />
                </a>
              ) : (
                <img
                  src={dish.imageUrl}
                  alt={dish.imageAlt}
                  className="food-img"
                />
              )}

              <div className="food-content">
                <h3>{dish.title}</h3>

                <div className="food-meta">
                  <span>
                    <i className="fas fa-fire"></i> {dish.difficultyLabel}:{" "}
                    {dish.difficultyValue}
                  </span>

                  <span>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {dish.locationLabel}: {dish.locationValue}
                  </span>
                </div>

                <p style={{ fontSize: "0.9rem", color: "#555" }}>
                  {dish.description}
                </p>

                <div className="text-start">
                  <Button
                    className="btn animated-btn text-black"
                    style={{ flex: 1, }}
                    onClick={() => setOpen(true)}
                  >
                    Voir Recette
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ModalRecette
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};