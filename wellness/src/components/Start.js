import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Watch from './ReactStopwatch';
import './Start.css'
import Chart from './canvasjs.react';
// import * as CanvasJSReact from './canvasjs.react';
// //var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Start extends Component {


    render() {
        return (

            <div className="startContainer">
                <img className="startImg" src="/gymplace/card-gym.png" alt="photo of exercise"></img>
                <div>
                    <p className="watchColor">
                        <Watch />
                    </p>

                    <p className="duration">
                        Duration
                    </p>


                </div>
                
                {/* <div><Chart /></div> */}

                <form method='POST'></form>
                <table className="startTable">
                    <th>Set</th>
                    <th>Weight</th>
                    <th>Reps</th>
                    <th>done</th>
                    
                        <tr>
                            <td>1</td>
                            <td><input type="text" name="weight"></input></td>
                            <td><input type="text" name="Reps"></input></td>
                            <td><input type="checkbox" className="checkRound" name="done"></input></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type="text" name="weight"></input></td>
                            <td><input type="text" name="Reps"></input></td>
                            <td><input type="checkbox" className="checkRound" name="done"></input></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type="text" name="weight"></input></td>
                            <td><input type="text" name="Reps"></input></td>
                            <td><input type="checkbox" className="checkRound" name="done"></input></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><input type="text" name="weight"></input></td>
                            <td><input type="text" name="Reps"></input></td>
                            <td><input type="checkbox" className="checkRound" name="done"></input></td>
                        </tr>
                </table>
            </div>
        );
    }
}


export default Start;