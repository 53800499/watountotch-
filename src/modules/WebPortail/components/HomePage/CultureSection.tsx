import React from "react";
import { WORDS } from "../../../../common/constants/wording";
import { CULTURE_ITEMS_MOCK } from "../../../../common/mocks/home_page";

export const CultureSection = () => {
  const { title } = WORDS.home_page.culture_section;

  return (
    <>
      <section id="culture" className="culture-section">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="divider"></div>
        </div>

        <div className="culture-scroller">
          {CULTURE_ITEMS_MOCK.map((item) => (
            <div className="culture-item" key={item.title}>
              <i className={`${item.iconClass} culture-icon`}></i>
              <h3 className="text-white">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};