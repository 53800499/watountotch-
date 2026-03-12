/** @format */

import { useState } from "react";

interface BookingFormProps {
  price?: number;
  currency?: string;
  guideName?: string;
}

export const BookingForm = ({
  price = 99,
  currency = "FCFA",
  guideName = "Amanda Wilson"
}: BookingFormProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [tourDuration, setTourDuration] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedLanguage || !tourDuration) {
      alert("Veuillez remplir tous les champs requis");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log({
        date: selectedDate,
        gender: selectedGender,
        numberOfPeople,
        guide: guideName,
        language: selectedLanguage,
        duration: tourDuration,
        specialRequests: specialRequests,
        totalPrice: price * numberOfPeople
      });

      alert("Rendez-vous confirmé! Vérifiez vos e-mails.");
      setIsLoading(false);
      // Reset form
      setSelectedDate("");
      setSelectedGender("");
      setSelectedLanguage("");
      setTourDuration("");
      setSpecialRequests("");
      setNumberOfPeople(1);
    }, 1500);
  };

  // Generate next 30 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <div className="booking-form-container">
      <div className="booking-card">
        {/* Pricing Header */}
        <div className="booking-header">
          <div className="price-section ">
            <div className="price-label">Prix par personne</div>
            <div className="price-display">
              <span className="price-amount">{price}</span>
              <span className="price-currency">{currency}</span>
            </div>
          </div>
          <div className="guide-name">
            <span className="label">Guide</span>
            <p className="name">{guideName}</p>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleBooking} className="booking-form">
          {/* Number of People */}
          <div className="form-group">
            <label htmlFor="people" className="form-label">
              Nombre de personnes
            </label>
            <div className="quantity-selector">
              <button
                type="button"
                className="qty-btn"
                onClick={() =>
                  setNumberOfPeople(Math.max(1, numberOfPeople - 1))
                }>
                −
              </button>
              <input
                type="number"
                id="people"
                min="1"
                value={numberOfPeople}
                onChange={(e) =>
                  setNumberOfPeople(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="qty-input"
              />
              <button
                type="button"
                className="qty-btn"
                onClick={() => setNumberOfPeople(numberOfPeople + 1)}>
                +
              </button>
            </div>
          </div>

          {/* Select Date */}
          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Sélectionnez une date <span className="required">*</span>
            </label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="form-select">
              <option value="">Choisir une date...</option>
              {generateDates().map((date, index) => (
                <option key={index} value={date.toISOString().split("T")[0]}>
                  {formatDate(date)}
                </option>
              ))}
            </select>
          </div>

          {/* Select Language */}
          <div className="form-group">
            <label htmlFor="language" className="form-label">
              Langue du guide <span className="required">*</span>
            </label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="form-select">
              <option value="">Choisir une langue...</option>
              <option value="fr">Français</option>
              <option value="en">Anglais</option>
              <option value="es">Fon</option>
              <option value="de">Yoruba</option>
            </select>
          </div>

          {/* Tour Duration */}
          <div className="form-group">
            <label htmlFor="duration" className="form-label">
              Durée de la visite <span className="required">*</span>
            </label>
            <select
              id="duration"
              value={tourDuration}
              onChange={(e) => setTourDuration(e.target.value)}
              className="form-select">
              <option value="">Choisir une durée...</option>
              <option value="2h">2 heures</option>
              <option value="4h">4 heures</option>
              <option value="6h">6 heures</option>
              <option value="full">Journée complète (8h)</option>
            </select>
          </div>

          {/* Select Gender */}
          <div className="form-group">
            <label className="form-label">
              Genre {/* <span className="required">*</span> */}
            </label>
            <div className="gender-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={selectedGender === "male"}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <span className="radio-label">Homme</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={selectedGender === "female"}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <span className="radio-label">Femme</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={selectedGender === "other"}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <span className="radio-label">Autre</span>
              </label>
            </div>
          </div>

          {/* Special Requests */}
          <div className="form-group">
            <label htmlFor="special-requests" className="form-label">
              Demandes spéciales (optionnel)
            </label>
            <textarea
              id="special-requests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Ex: intérêts particuliers, restrictions alimentaires, etc."
              className="form-textarea border border-light-subtle rounded"
              rows={3}
            />
          </div>

          {/* Total Price */}
          <div className="total-price">
            <span className="total-label">Total</span>
            <span className="total-amount">
              {(price * numberOfPeople).toFixed(2)} {currency}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`booking-btn ${isLoading ? "loading" : ""}`}>
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Réservation en cours...
              </>
            ) : (
              "Obtenir un rendez-vous"
            )}
          </button>

          {/* Additional Info */}
          <div className="booking-info">
            <p className="info-text">✓ Confirmation instantanée par e-mail</p>
            <p className="info-text">✓ Annulation gratuite jusqu'à 24h avant</p>
            <p className="info-text">✓ Support 24/7</p>
          </div>
        </form>

        {/* Contact Support */}
        <div className="contact-support">
          <p className="support-text">Des questions?</p>
          <a href="mailto:support@touristguide.com" className="support-link">
            Contactez notre support
          </a>
        </div>
      </div>
    </div>
  );
};
