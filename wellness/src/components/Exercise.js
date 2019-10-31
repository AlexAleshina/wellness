import React, { Component } from 'react';
import axios from 'axios';
import './Exercises.css';
import { Link } from 'react-router-dom';

function ExcerciseDetails(props) {
    return (
        <div className="popup">

            <div className="flexPopup">
                <a onClick={props.closePopup}><img className="icons" src="/icons/back.png" alt="back"></img></a>
                <h1>Overview</h1>
                <p className="empty"></p>
            </div>
            <img className="ImgPopup" src={props.img_url} />

            <div className="flexPopup">
                <h2>{props.exercise_name}</h2>
                <div>
                    <h2>Equipment</h2>
                    <p>{props.equipment.join(", ")}</p>
                </div>
            </div>

            <p>{props.description}</p>


            <Link className="buttonPopup" to="/start">Start</Link>
        </div>
    )
}

class ExercisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            showDiv: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item_Id) {
        this.setState(
            { showDiv: item_Id }
        )
    }


    componentDidMount() {
        let workoutId = this.props.match.params.workoutId;
        axios
            .get(`http://localhost:5000/workout/placeId/${workoutId}`)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        workout: result.data
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

    closePopup() {
        this.setState({ showDiv: null });
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const { error, isLoaded, workout } = this.state;
        if (error) {
            return <div>error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>loading...</div>;
        } else {
            return (
                <div>
                    <div className="flexForHeader">
                        <Link to="#" onClick={() => this.goBack()}><img className="icons" src="/icons/back.png" alt="back"></img></Link>
                        <div className="nameforHeader">
                            <h1>{workout.workout_name}</h1>
                            <span className="exerciseSpan">{workout.short_description}</span>
                        </div>
                        <p className="empty">Hi, You</p>
                    </div>

                    <div className="paddingForExercises">
                        {workout.exercises.map(item => (
                            <>
                                <a>
                                    <div className="exerciseFlex" onClick={() => this.handleClick(item._id)} key={item._id}>
                                        <img className="exerciseImg" src={item.img_url} alt="exercise"></img>
                                        <p className="exerciseP">{item.exercise_name}</p>
                                        <img className="icons" src="/icons/forward.png" alt="back"></img>
                                    </div>
                                </a>

                                {this.state.showDiv === item._id ? <ExcerciseDetails {...item} closePopup={() => this.closePopup()} /> : null}

                            </>
                        ))}
                    </div>

                </div>
            );
        }
    }
}

export default ExercisePage;