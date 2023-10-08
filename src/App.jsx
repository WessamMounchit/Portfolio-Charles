import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Price from "./pages/Price"
import Contact from "./pages/Contact"


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallerie" element={<Gallery />} />
          <Route path="/tarifs" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
