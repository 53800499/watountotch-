/** @format */

import React from "react";
import { PersonCard } from "./PersonCard";
import { BACKGROUND_BEHANZIN, PROFIL_SOUROU } from "../../../../assets/images";

export const Triumvirat: React.FC = () => {
  return (
    <section className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h3 className="fw-semibold">Le Triumvirat</h3>

        <div
          className="mx-auto mt-2"
          style={{
            width: "50px",
            height: "3px",
            backgroundColor: "#000"
          }}
        />
      </div>

      {/* Cards */}
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <PersonCard
            image={BACKGROUND_BEHANZIN}
            name="Hubert Maga"
            role="1er Président"
          />
        </div>

        <div className="col-md-4 mb-4">
          <PersonCard
            image={PROFIL_SOUROU}
            name="Sourou M. Apithy"
            role="Vice-Président"
          />
        </div>

        <div className="col-md-4 mb-4">
          <PersonCard
            image={BACKGROUND_BEHANZIN}
            name="Justin Ahomadégbé"
            role="Premier Ministre"
          />
        </div>
      </div>
      {/* 
      
      <h3
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "var(--benin-green)",
        }}
      >
        Figures de Légende
      </h3>

      <div className="figures-grid">
        <div
          className="figure-card"
          onClick={() => (window.location.href = "figures-detail.html")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Behanzin-1895.jpg"
            alt="Roi Béhanzin"
            className="figure-img"
          />
          <h4>Roi Béhanzin</h4>
          <span className="figure-role">Résistant & Roi</span>
        </div>

        <div
          className="figure-card"
          onClick={() => (window.location.href = "figures-detail.html")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Place_Bio_Guera_de_Parakou_28.jpg/250px-Place_Bio_Guera_de_Parakou_28.jpg"
            alt="Bio Guéra"
            className="figure-img"
          />
          <h4>Bio Guéra</h4>
          <span className="figure-role">Prince Guerrier</span>
        </div>

        <div
          className="figure-card"
          onClick={() => (window.location.href = "figures-detail.html")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ang%C3%A9lique_Kidjo_Gershwin_2023.jpg"
            alt="Angélique Kidjo"
            className="figure-img"
          />
          <h4>Angélique Kidjo</h4>
          <span className="figure-role">Icône Culturelle</span>
        </div>
      </div>
       */}
    </section>
  );
};
