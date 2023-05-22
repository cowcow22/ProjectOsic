import React from 'react';
import './OsicLeftMenu.css';
import Playlist from './playlist';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlinePlaylistAddCircle } from 'react-icons/md';

function OsicLeftMenu() {
  return (
    <div className="leftMenu">
      <div className="navbar">
        <img src={require('./images/logo.png')} alt="ini logo" className="logo" />
        <a href="/aboutus" target="_blank" className="navigation">
          About Us
        </a>
      </div>
      {/* <div className="searchBox">
        <input type="text" placeholder="Search Song..." />
        <div className="searchIcon">
          <BiSearchAlt />
        </div>
      </div> */}
      <div className="containerMenu container-fluid mr-0">
        <p className="menu">Menu</p>
        <ul>
          <div className="bebas">
            <MdOutlinePlaylistAddCircle />
            <p className="playlistMenu">Playlist</p>
          </div>
          <li>
            <Playlist />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OsicLeftMenu;
