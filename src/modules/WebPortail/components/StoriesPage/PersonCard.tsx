/** @format */

import React from "react";

interface PersonCardProps {
  image: string;
  name: string;
  role: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({ image, name, role }) => {
  return (
    <div className="text-center">
      <div className="mb-3">
        <img
          src={image}
          alt={name}
          className="rounded-circle img-fluid shadow-sm"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover"
          }}
        />
      </div>

      <h5 className="fw-semibold mb-1">{name}</h5>
      <p
        className="text-uppercase text-muted"
        style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
        {role}
      </p>
    </div>
  );
};


