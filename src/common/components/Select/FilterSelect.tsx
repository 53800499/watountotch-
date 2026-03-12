/** @format */

import React from "react";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterSelectProps {
  id: string;
  label: string;
  options: FilterOption[];
  onChange?: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  id,
  label,
  options,
  onChange
}) => (
  <div className="filter-group">
    <label className="filter-label" htmlFor={id}>
      {label}
    </label>
    <select
      id={id}
      className="filter-select"
      onChange={(e) => onChange?.(e.target.value)}
      aria-label={`Filtrer par ${label.toLowerCase()}`}>
      {options.map((opt) => (
        <option key={opt.value || "all"} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
export default FilterSelect;