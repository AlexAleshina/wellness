import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './WorkoutPage.css';


class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    let placeId = this.props.match.params.placeId;
    axios
      .get(`http://localhost:5000/workout/${placeId}`)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            workout: result.data.workout
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, workout } = this.state;
    if (error) {
      return <div>error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>loading...</div>;
    } else {
      return (
        <div className="workoutContainer">
          <div className="flexForHeader">
            <Link to="/places"><img className="icons" src="/icons/back.png" alt="back"></img></Link>
            <h1>WORKOUTS</h1>
            <p className="empty">Hi, You</p>
          </div>

          {workout.map(item => (

            <Link to={`/workout/${item._id}`}>

              <div className="elemContainer" key={item._id}>
                <div className="thumbnailContaner">
                  <img className="workoutImg" src={item.img_url} alt="workout"></img>
                  <span>{item.duration}</span>
                </div>
                <div className="nameContainer">
                  <h2>{item.workout_name}</h2>
                  <span>{item.short_description}</span>
                </div>

                <div>
                  <img className="icons" src="/icons/forward.png" alt="back"></img>
                </div>
              </div>
            </Link>

          ))}
        </div>
      );
    }
  }
}

export default WorkoutPage;