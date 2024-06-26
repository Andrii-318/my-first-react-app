import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
