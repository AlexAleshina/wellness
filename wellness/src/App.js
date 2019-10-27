import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        <Route exact path="/" component={MainPage} />
      </div>
    </div>
  );
}

export default App;
