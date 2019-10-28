import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import PlacesPage from './components/PlacesPage';
import WorkoutPage from './components/WorkoutPage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/places" component={PlacesPage} />
        <Route exact path="/workout" component={WorkoutPage} />
      </div>
    </div>
  );
}

export default App;
