// BookingForm.js
import React, { useState } from 'react';
import '../styles/BookingForm.css'; 

const BookingForm = ({ showName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(formData));
    // Add your logic to handle form submission (e.g., sending data to a server)
    console.log('Booking submitted:', { showName, formData });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Movie Name:
        <input className="form-input" type="text" name="name" value={showName} readOnly />
      </label>
      <br />
      <label className="form-label">
        Name:
        <input
          className="form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button className="form-button" type="submit">
        Book Ticket
      </button>
    </form>
  );
};

export default BookingForm;
