import React from "react";
import "./Osic.css";
import OsicLeftMenu from "./OsicLeftMenu.jsx";
import OsicMiddle from "./OsicMiddle";

function Osic() {
  return (
    <div className="container maxx">
      <img
        className="background"
        src="https://wallpaperaccess.com/full/880901.png"
        alt="background"
      />
      <OsicLeftMenu />
      <OsicMiddle />
    </div>
  );
}

export default Osic;
