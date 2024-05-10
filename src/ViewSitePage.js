// ViewSitePage.js

import React from 'react';
import './ViewSitePage.css'; // Import the CSS file

const ViewSitePage = () => {
  return (
    <div className="view-site-page">
      <h1>View Sites</h1>
      <div className="site-thumbnails">
        <div className="site-thumbnail">
          <img src="map.png" alt="R&D TPL" />
          <h3>R&D TPL</h3>
        </div>
        <div className="site-thumbnail">
          <img src="floor_map.png" alt="Site X" />
          <h3>Site X</h3>
        </div>
        <div className="site-thumbnail">
          <img src="floor_map2.png" alt="Site Y" />
          <h3>Site Y</h3>
        </div>
      </div>
    </div>
  );
};

export default ViewSitePage;
