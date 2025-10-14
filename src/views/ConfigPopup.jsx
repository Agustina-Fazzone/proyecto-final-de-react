// ConfigPopup.jsx
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import '../index.css';


export default function ConfigPopup() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <button className="config-button" onClick={() => setIsOpen(true)}>⚙️</button>


      {isOpen && (
        <div className={`popup ${theme}`}>
          <h2>Configuración</h2>
          <button onClick={toggleTheme} className="toggle-theme">
            Cambiar a {theme === "light" ? "oscuro" : "claro"}
          </button>
          <button onClick={() => setIsOpen(false)} className="close-popup">
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}