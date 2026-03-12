export const DestinationDetailContainer = () => {
  return (
    <div className="detail-container">
      {/* BARRE D'INFOS PRATIQUES */}
      <div className="info-bar">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Situation</span>
          <small>Lac Nokoué</small>
        </div>
        <div className="info-item">
          <i className="fas fa-clock"></i>
          <span>Visite</span>
          <small>2h - 4h</small>
        </div>
        <div className="info-item">
          <i className="fas fa-sun"></i>
          <span>Meilleur moment</span>
          <small>Nov - Mars</small>
        </div>
        <div className="info-item">
          <i className="fas fa-wallet"></i>
          <span>Budget</span>
          <small>Moyen</small>
        </div>
      </div>

      <div className="content-grid">
        {/* COLONNE GAUCHE : TEXTE */}
        <div className="main-text">
          <h2>L'Histoire de la Cité Lacustre</h2>
          <p>
            Ganvié, qui signifie « la collectivité est sauvée », est née au XVIIIe
            siècle. Ses fondateurs, fuyant les razzias esclavagistes des rois du
            Dahomey, se sont réfugiés sur le lac Nokoué, sachant que la croyance
            religieuse de leurs ennemis leur interdisait d'attaquer sur l'eau.
          </p>
          <p>
            Aujourd'hui, environ 30 000 habitants vivent dans ces maisons sur
            pilotis en bambou. Tout se fait en pirogue : le marché flottant,
            aller à l'école, chercher de l'eau douce.
          </p>

          <h2 style={{ marginTop: "40px" }}>Ce que vous allez voir</h2>
          <ul style={{ padding: 0 }}>
            <li>
              <i className="fas fa-check"></i> Le marché flottant au petit matin.
            </li>
            <li>
              <i className="fas fa-check"></i> La rue des amoureux.
            </li>
            <li>
              <i className="fas fa-check"></i> Les techniques de pêche traditionnelles (Acadjas).
            </li>
          </ul>

          <h3 style={{ marginTop: "30px" }}>Galerie Photos</h3>
          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1950"
              alt="Ganvie 1"
            />
            <img
              src="https://my-make-bucket.s3.eu-north-1.amazonaws.com/Photos/ixngcxhelvtbzfhlnsxx.webp"
              alt="Ganvie 2"
            />
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1"
              alt="Ganvie 3"
            />
          </div>
        </div>

        {/* COLONNE DROITE : SIDEBAR */}
        <aside>
          <div className="sidebar-card">
            <h3>Réserver une visite</h3>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "20px" }}>
              Nos guides locaux vous emmènent en pirogue motorisée ou manuelle.
            </p>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "var(--benin-green)",
                marginBottom: "20px",
              }}
            >
              15.000 FCFA{" "}
              <span style={{ fontSize: "0.8rem", fontWeight: 400, color: "#888" }}>
                /pers
              </span>
            </div>

            <a href="#" className="btn-cta w-100 text-center">
              Réserver maintenant
            </a>
          </div>

          <div className="sidebar-card">
            <h3>Comment s'y rendre ?</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Départ de l'embarcadère d'Abomey-Calavi (à 30min de Cotonou en taxi).
            </p>
            {/* Simulation de carte */}
            <div
              style={{
                background: "#eee",
                height: "150px",
                width: "100%",
                marginTop: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                borderRadius: "8px",
              }}
            >
              <i className="fas fa-map-marked-alt" style={{ marginRight: "10px" }}></i>{" "}
              Carte Google Maps
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};