/** @format */

import React from "react";
import FilterSelect, { type FilterOption } from "../../../common/components/Select/FilterSelect";

interface FiltersSectionProps {
  title: string;
  subTitle?: string;
  description?: string;
  regions: FilterOption[];
  budgets: FilterOption[];
  types: FilterOption[];
  onFilterChange?: (filterType: string, value: string) => void;
  onReset?: () => void;
}

export const FiltersSection: React.FC<FiltersSectionProps> = ({
  title,
  subTitle,
  description,
  regions,
  budgets,
  types,
  onFilterChange,
  onReset
}) => {
  return (
    <section
      className="box-filters"
      data-aos="fade-up"
      aria-labelledby="filters-title">
      <h3 id="filters-title" className="title-above left">
        {subTitle}Filtres de recherche
      </h3>

      <div className="text-center pb-4">
        <h2 className="heading-lg">{title}</h2>
        <p className="description">{description}</p>
      </div>

      <div
        className="filters-grid"
        role="region"
        aria-label="Filtres de recherche">
        <FilterSelect
          id="filter-region"
          label="Région"
          options={regions}
          onChange={(value) => onFilterChange?.("region", value)}
        />
        <FilterSelect
          id="filter-budget"
          label="Budget"
          options={budgets}
          onChange={(value) => onFilterChange?.("budget", value)}
        />
        <FilterSelect
          id="filter-type"
          label="Type"
          options={types}
          onChange={(value) => onFilterChange?.("type", value)}
        />
        <div className="filter-group">
          <label className="filter-label" aria-hidden="true">
            Action
          </label>
          <button
            className="filter-clear"
            type="button"
            aria-label="Réinitialiser les filtres"
            onClick={onReset}>
            Réinitialiser
          </button>
        </div>
      </div>
    </section>
  );
};
