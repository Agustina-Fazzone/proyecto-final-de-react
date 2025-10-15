import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import "../index.css";

export default function ConfigPopup() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const t = translations[language];
  return (
    <div className="chat-actions">
      <button className="config-button" onClick={() => setIsOpen(!isOpen)}>
        ⚙️
      </button>

      {isOpen && (
        <div className={`popup ${theme} show`}>
          <h2>{t.settings}</h2>

          <button onClick={toggleTheme} className="toggle-theme">
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          <div className="language-selector">
            <label>{t.language}:</label>
            <select
              value={language}
              onChange={(e) => toggleLanguage(e.target.value)}
            >
              <option value="es">🇪🇸 Español</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>

          <button onClick={() => setIsOpen(false)} className="close-popup">
            ❌ {t.close}
          </button>
        </div>
      )}
    </div>
  );
}
