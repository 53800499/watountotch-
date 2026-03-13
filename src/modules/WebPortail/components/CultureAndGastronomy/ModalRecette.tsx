type ModalRecetteProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalRecette = ({ isOpen, onClose }: ModalRecetteProps) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="text-white">
            <i className="fas fa-utensils"></i> Recette : Amiwo au Poulet
          </h3>

          <button className="close-modal" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
            <div className="mb-4">Amiwo au poulet est un plat traditionnel très apprécié au Bénin. Il est préparé à base de pâte de maïs cuite dans une sauce tomate épicée, ce qui lui donne sa couleur rouge caractéristique et sa saveur riche.</div>
          <div className="recipe-grid">
            <div>
              <h4
                style={{
                  color: "var(--benin-red)",
                  marginBottom: "15px",
                }}
              >
                Ingrédients (4 pers.)
              </h4>

              <ul className="ingredients-list">
                <li>
                  <span>Farine de maïs</span>
                  <span>500g</span>
                </li>
                <li>
                  <span>Poulet bicyclette</span>
                  <span>1 entier</span>
                </li>
                <li>
                  <span>Tomate concentrée</span>
                  <span>2 c.à.s</span>
                </li>
                <li>
                  <span>Oignons / Ail</span>
                  <span>À volonté</span>
                </li>
                <li>
                  <span>Piment noir (Yébessé)</span>
                  <span>1 pincée</span>
                </li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  color: "var(--benin-green)",
                  marginBottom: "15px",
                }}
              >
                Préparation
              </h4>

              <p style={{ marginBottom: "10px" }}>
                <span className="step-number">1</span> Assaisonner le poulet et
                le faire frire jusqu'à ce qu'il soit doré.
              </p>

              <p style={{ marginBottom: "10px" }}>
                <span className="step-number">2</span> Dans l'huile, faire
                revenir tomates et oignons pour créer la base de la sauce.
              </p>

              <p style={{ marginBottom: "10px" }}>
                <span className="step-number">3</span> Prélever une partie de la
                sauce pour l'accompagnement.
              </p>

              <p style={{ marginBottom: "10px" }}>
                <span className="step-number">4</span> Verser la farine en pluie
                dans le reste du bouillon et tourner vigoureusement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};