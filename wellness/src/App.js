import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import PlacesPage from './components/PlacesPage';
import WorkoutPage from './components/WorkoutPage';
import ExercisesPage from './components/Exercise';
import Signup from './components/auth/Signup';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import StartPage from './components/StartPage';
import ChartPage from './components/Chart';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout();
    this.setState({ loggedInUser: false });
  }

  render() {
    this.fetchUser()

    if (this.state.loggedInUser === null){
      return <p>Loading...</p>;
    } else if (!this.state.loggedInUser) {
      return (
        <div className="App">
          <div className="mainContent">
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
              <Route exact path="/" component={MainPage} />
              <Redirect path="*" to="/" />
            </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="mainContent">
            <Switch>
              <Route exact path="/places" component={PlacesPage} />
              <Route exact path="/workout/place/:placeId" component={WorkoutPage}/>
              {/* <Route exact path="/exercises" component={ExercisesPage} /> */}
              <Route exact path="/workout/:workoutId" component={ExercisesPage}/>
              <Route exact path="/start-exercise/:id" component={StartPage}/>
              <Route exact path="/stats" render={() => <ChartPage exerciseId="5db17f019788334dfc3bcc0e" />}/>
              <Redirect path="*" to="/places" />
            </Switch>
          </div>
          <div className="footer">
            <Footer logout={this.logout}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
