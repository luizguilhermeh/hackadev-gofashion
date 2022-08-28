import React from "react";
import Routes from "./components/pages/routes/routes";
import Headers from "./components/Headers/Headers";
import Footer from "./components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <div className="div-app">
      <Headers />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
