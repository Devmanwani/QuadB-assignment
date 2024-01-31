// ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShowList.css'; // Import your CSS file for ShowList styling

const ShowList = ({ shows }) => {
  return (
    <div className="show-list-container">
      <h2>Show List</h2>
      {shows.map((show) => (
        <div key={show.show.id} className="show-card">
          <img
            src={show.show.image && show.show.image.medium}
            alt={show.show.name}
            className="show-image"
          />
          <h3 className="show-name">{show.show.name}</h3>
          <p className="show-rating">Rating: {show.show.rating && show.show.rating.average ? show.show.rating.average : 'N.A'}</p>
          <p className="show-genres">Genres: {show.show.genres && show.show.genres.join(', ')}</p>
          <Link to={`/show/${show.show.id}`}>
            <button className="view-details-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
