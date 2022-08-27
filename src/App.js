import React from "react";
import Routes from "./pages/routes/routes";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
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
