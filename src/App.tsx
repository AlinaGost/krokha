import React from 'react';
import './App.css';
import './styles.scss';
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
