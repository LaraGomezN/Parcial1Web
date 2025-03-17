import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFull from './components/LoginFull';
import Home from './components/Home';
import Menu from './components/Menu';
import Store from './components/Store';
import Cart from './components/Cart';
import messages from "./Messages";
import { IntlProvider } from "react-intl";
import React, { useState } from "react";

export default function App() {
  const [locale, setLocale] = useState("en");
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <BrowserRouter>
          <select onChange={(e) => setLocale(e.target.value)} style={{ margin: "10px" }}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          <Routes>
            <Route path="/" element={<LoginFull />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}
