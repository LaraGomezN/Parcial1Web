import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFull from './components/LoginFull';
import Home from './components/Home';

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFull />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}