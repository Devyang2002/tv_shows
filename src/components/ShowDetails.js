import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css';
import { Link } from 'react-router-dom';


function ShowDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  if (!showDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='ShowDetails'>
      <h2>{showDetails.name}</h2>
      <p>{showDetails.summary}</p>
      <button>Book Movie Ticket</button>
      <Link to="/tv_shows" > <button className='button2' >Go  Back</button>
         </Link>
    </div>
  );
}

export default ShowDetails;
