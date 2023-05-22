import React from "react";
import "./OsicLeftMenu.css";

function Menu({ title, list }) {
  return (
    <div className="containerMenu">
      <p className="title">{title}</p>

      <ul>
        {list &&
          list.map((listmenu) => (
            <li>
              {" "}
              <a href="#">
                <i>{listmenu.icon}</i>
                <span>{listmenu.nama}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;
