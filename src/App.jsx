import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<ShowList shows={shows} />} />
        <Route path="/show/:id" element={<ShowDetail shows={shows} />} />
      </Routes>
    </Router>
  );
}

export default App;
