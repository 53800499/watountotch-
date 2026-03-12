import { WORDS } from "../../../../common/constants/wording";

export const SeachSection = () => {
  const {
    destination_label,
    destination_placeholder,
    type_label,
    type_options,
    budget_label,
    budget_options,
    submit_label
  } = WORDS.home_page.search_section;

  return (
    <>
      <div id="booking" className="booking-section">
        <form className="booking-form">
          <div className="form-group">
            <label>
              <i className="fas fa-map-marker-alt"></i> {destination_label}
            </label>
            <input type="text" placeholder={destination_placeholder} />
          </div>
          <div className="form-group">
            <label>
              <i className="fas fa-home"></i> {type_label}
            </label>
            <select>
              {type_options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>
              <i className="fas fa-wallet"></i> {budget_label}
            </label>
            <select>
              {budget_options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <button type="button" className="btn-search">
            {submit_label}
          </button>
        </form>
      </div>
    </>
  );
};

