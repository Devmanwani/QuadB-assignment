// ShowDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../styles/Showdetails.css'; // Import your CSS file

const ShowDetail = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find((s) => s.show.id.toString() === id);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleBookTicket = () => {
    setShowBookingForm(true);
    setButtonClicked(true);
  };

  return (
    <div className="show-detail-container">
      <h2>Show Detail</h2>
      {show && (
        <div className="show-detail">
          <h3>{show.show.name}</h3>
          <div className="show-summary" dangerouslySetInnerHTML={{ __html: show.show.summary }} />
          {!buttonClicked && (
            <button className="book-ticket-button" onClick={handleBookTicket}>
              Book Ticket
            </button>
          )}
          {showBookingForm && <BookingForm showName={show.show.name} />}
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
