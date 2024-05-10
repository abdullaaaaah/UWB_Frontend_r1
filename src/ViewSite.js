// ViewSite.js

import React from 'react';
import './ViewSite.css';

function ViewSite({ sites }) {
  return (
    <div className="view-site-container">
      <h2>View Sites</h2>
      <div className="site-gallery">
        {sites.map((site, index) => (
          <div key={index} className="site-item">
            <img src={site.image} alt={site.name} />
            <p>{site.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSite;
