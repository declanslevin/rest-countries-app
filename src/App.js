import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/styles.min.css';
import {Header, Search, Filter, CountryCard} from './index';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container">
          <Search />
          <Filter />
          <div className="App-main-cards">
            <CountryCard 
              flag="https://via.placeholder.com/300x160.png"
              countryName="Germany"
              population="81,770,900"
              region="Europe"
              capital="Berlin"
            />
            <CountryCard
              flag="https://via.placeholder.com/300x160.png"
              countryName="United States of America"
              population="323,947,000"
              region="Americas"
              capital="Washington, D.C"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
