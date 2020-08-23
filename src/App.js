import React from 'react';
import './App.css';
import Searcher from './searcher.js'
import Header from './Header.js'
import DATA from './data.js'
import MONSTERS from './mons.js'




function App() {
  return (
    <div className="App">
      <Header/>
      <Searcher data = {DATA} mons = {MONSTERS} />
    </div>
  );
}

export default App;
