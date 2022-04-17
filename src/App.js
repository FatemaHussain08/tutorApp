import logo from "./logo.svg";
import "./App.css";
import "./homepage.css";
import "./card.css";
import "./components/addTutor.css";
import "./components/details.css";
import Navbar from "./Navbar";
import Maincontent from "./Maincontent";
import Footer from "./components/Footer";
import Card from "./components/Card";
import AddTutor from "./components/AddTutor";
import Details from "./components/Details";

import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Navigate,
} from "react-router-dom";
import { Fragment } from "react";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Maincontent /> */}
      <Routes>
        <Route
          path="/Home"
          element={
            <Fragment>
              <Maincontent />
              <Card />
            </Fragment>
          }
        />
        <Route path="/Addtutor" element={<AddTutor />} />
        {/* <Route path="/Home" element={<Card />} /> */}
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
