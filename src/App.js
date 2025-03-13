import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFull from './components/LoginFull';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFull />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}