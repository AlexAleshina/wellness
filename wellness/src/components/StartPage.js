import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Watch from './ReactStopwatch';
import './StartPage.css'
import ChartPage from './Chart';
import qs, { stringify } from "query-string"
// import * as CanvasJSReact from './canvasjs.react';
// //var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoaded: false,
            error: null
        };
    }

    getExerciseId() {
        return this.props.match.params.id;
    }

    componentDidMount() {

        axios
            .get(`${process.env.REACT_APP_server}/exercises/${this.getExerciseId()}`, { withCredentials: true })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data
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

    submit(e) {
        e.preventDefault();

        const data = e.target;
        let sets = [];
        for (let i = 1; i < data.length; i += 3) {
            if (data[i + 2].checked) {
                sets.push({
                    weight: parseInt(data[i + 0].value) || 0,
                    reps: parseInt(data[i + 1].value) || 0
                })
            }
        }

        const requestBody = {
            exerciseId: this.getExerciseId(),
            duration: 1,
            sets
        }

        axios
            .post(`${process.env.REACT_APP_server}/results/save`, requestBody, { withCredentials: true })
            .then(
                (result) => {
                    console.log(`Success: ${JSON.stringify(result)}`);
                    this.props.history.goBack();
                },
                (error) => {
                    console.log(`Error: ${JSON.stringify(error)}`);
                }
            )
    }

    isNumberKey(e) {
        var charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
        }
    }

    render() {
        if (!this.state.isLoaded) {
            return <h1>LOADING...</h1>
        } else if (this.state.error) {
            return <h1>ERROR: {this.state.error}</h1>
        } else {
            return (
                <div className="startContainer">
                    <img className="startImg" src={this.state.data.img_url} alt="photo of exercise"></img>
                    <div>
                        <p className="watchColor">
                            <Watch />
                        </p>

                        <p className="duration">
                            Duration
                        </p>
                    </div>

                    {/* <div><Chart /></div> */}
                    {/* <h1>Excercise: {this.props.location.query.exerciseId}</h1> */}
                    <form className="formStart" onSubmit={e => this.submit(e)}>
                        <button className="submit" type="submit">Finish</button>
                        <table className="startTable">
                            <th>Set</th>
                            <th>Weight</th>
                            <th>Reps</th>
                            <th>done</th>

                            <tr>
                                <td>1</td>
                                <td><input placeholder="0" type="text" name="weight" onKeyPress={this.isNumberKey}></input></td>
                                <td><input placeholder="0" type="text" name="Reps" onKeyPress={this.isNumberKey}></input></td>
                                <td><input type="checkbox" className="checkRound" name="done"></input></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><input placeholder="0" type="text" name="weight" onKeyPress={this.isNumberKey}></input></td>
                                <td><input placeholder="0" type="text" name="Reps" onKeyPress={this.isNumberKey}></input></td>
                                <td><input type="checkbox" className="checkRound" name="done"></input></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><input placeholder="0" type="text" name="weight" onKeyPress={this.isNumberKey}></input></td>
                                <td><input placeholder="0" type="text" name="Reps" onKeyPress={this.isNumberKey}></input></td>
                                <td><input type="checkbox" className="checkRound" name="done"></input></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><input placeholder="0" type="text" name="weight" onKeyPress={this.isNumberKey}></input></td>
                                <td><input placeholder="0" type="text" name="Reps" onKeyPress={this.isNumberKey}></input></td>
                                <td><input type="checkbox" className="checkRound" name="done"></input></td>
                            </tr>
                        </table>
                    </form>
                </div>
            );
        }
    }
}


export default Start;