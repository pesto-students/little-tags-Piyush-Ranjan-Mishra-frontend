import React from "react";
import { render } from "react-snapshot";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import translations from "./translations";
import wrapperComponent from "./components/wrapper.component";

const language = navigator.language.split(/[-_]/)[0]; // language without region code

render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={translations[language]}>
      <wrapperComponent>
        <App />
      </wrapperComponent>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
