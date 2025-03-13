import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFull from './components/LoginFull';
import Home from './components/Home';
import Menu from './components/Menu';
import Store from './components/Store';
import Cart from './components/Cart';

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFull />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}