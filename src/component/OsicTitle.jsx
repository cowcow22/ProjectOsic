import React from 'react';
import './OsicTitle.css';
import { BiSearchAlt } from 'react-icons/bi';

function osicTitle() {
  return (
    <div className="osicTitle">
      <div className="searchBox">
        <input type="text" placeholder="Search Song..." />
        <div className="searchIcon">
          <BiSearchAlt />
        </div>
      </div>
      <h1>OSIC</h1>
    </div>
  );
}

export default osicTitle;
