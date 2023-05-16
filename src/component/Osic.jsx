import React from "react";
import "./Osic.css";
import OsicLeftMenu from "./OsicLeftMenu.jsx";
import OsicTitle from "./OsicTitle";
import OsicMain from "./OsicMain";
import OsicPlayer from "./OsicPlayer";

function Osic() {
  return (
    <div className="container-fluid px-0">
      <img
        className="background"
        src="https://pbs.twimg.com/media/DsdWY5iXoAEyfjd?format=jpg&name=large"
        alt="background"
      />
      <OsicLeftMenu />
      <div className="OsicMiddle">
        <div className="osicTitle">
          <OsicTitle />
        </div>
        <div className="OsicMainBody">
          <OsicMain />
          <OsicPlayer />
        </div>
      </div>
    </div>
  );
}

export default Osic;
