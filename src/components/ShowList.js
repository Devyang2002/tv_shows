import React from 'react';
import { Link } from 'react-router-dom';
import './ShowLists.css';

function ShowList({ shows }) {
  return (
    <div className="ShowList">
      {shows.map(show => (
        <div key={show.show.id} style={{ backgroundImage: `url(${show.show.image?.medium})` }}>
          <h3>
            <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ShowList;
