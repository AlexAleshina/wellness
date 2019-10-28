import React, { Component } from 'react';
import axios from 'axios';

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
      axios
      .get("http://localhost:5000/workout")
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
          <ul>
            {workout.map(item => (
              <li key={item._id}>
                {item.workout_name} 
                <img src={item.img_url} alt ="workout"></img>
                <p>{item.duration}</p>
              </li>
            ))}
          </ul>
        );
      }
    }
  }

export default WorkoutPage;