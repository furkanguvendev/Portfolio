import React from "react";
import "./Dropdown.css";

interface DropdownProps {
  lang: string;
  navClick: (url: string)=>void;
}

export const Dropdown: React.FC<DropdownProps> = ({ lang, navClick }) => {
  return (
    <label className="popup">
      <input type="checkbox" />
      <div className="burger" tabIndex={0}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="popup-window">
        <legend>{lang == "english" ? "Menu" : "Menü"}</legend>
        <ul>
          <li>
            <button onClick={()=>(navClick("/"))}>
              <span>{lang === "english" ? "Home Page" : "Ana Sayfa"}</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={()=>(navClick("/skills"))}>
              <span>{lang === "english" ? "Skills" : "Yetenekler"}</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={()=>(navClick("/projects"))}>
              <span>{lang === "english" ? "Projects" : "Projeler"}</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={()=>(navClick("/aboutme"))}>
              <span>{lang === "english" ? "About Me" : "Hakkımda"}</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};
