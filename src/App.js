import logo from './logo.svg';
import './App.css';
import "./homepage.css";
import "./card.css";
import "./components/details.css";
import Navbar from "./Navbar";
import Maincontent from "./Maincontent";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Navigate,
} from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maincontent />
      <Routes>
        <Route path="/Home" element={<Card />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
