import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./css/main.css";
import "./index.css";

import i18next from "i18next";
import global_en from "./translation/en/global.json";
import global_ru from "./translation/ru/global.json";
import { I18nextProvider } from "react-i18next";

import { BrowserRouter } from "react-router-dom";

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("lng") || "ru",
    resources: {
        en: {
            global: global_en,
        },
        ru: {
            global: global_ru,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
