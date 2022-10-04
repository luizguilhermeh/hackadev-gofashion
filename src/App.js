import React from "react";
import Routes from "./components/pages/routes/routes";
import Footer from "./components/Footer/Footer";
import Navbar from './components/pages/home/Navbar';
import {StateContext} from './context/StateContext'
import "./App.css"


function App() {

  return (
    <div className="div-app">
      <StateContext>
      <Navbar />
      <Routes />
      <Footer />
      </StateContext>
    </div>
  );
}

export default App;
