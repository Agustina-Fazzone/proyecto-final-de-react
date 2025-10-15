import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { RouterApp } from './router/RouterApp.jsx';
import './index.css';
import { ChatProvider } from './context/ChatContext.jsx';
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <ThemeProvider>
        <LanguageProvider>
          <RouterApp />
        </LanguageProvider>
      </ThemeProvider>
    </ChatProvider>
  </StrictMode>
);

