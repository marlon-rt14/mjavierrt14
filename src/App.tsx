import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRoute} from "./routes/AppRouter";
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import english from "./translation/english.json";
import spanish from "./translation/spanish.json";
import "rsuite/dist/rsuite.min.css";

i18next.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: english,
    es: spanish,
  },
});

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
