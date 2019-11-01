import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';

function Chart(props) {

	const data = {
		labels: props.xAxis,
		datasets: [
			{
				label: props.exercise_name,
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: props.yAxis
			}
		]
	};

	return (
		<Line data={data} />
	);
}


class ChartPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoaded: false,
			chosenExercise: null
		}
	}

	onExerciseChanged(e) {
		this.setState({
			chosenExercise: e.target.value
		})
	}

	render() {
		if (!this.state.isLoaded) {
			return <h1>Loading...</h1>;
		} else {
			const renderChart = () => {
				if (!this.state.chosenExercise)
					return;

				let yAxis = [];
				let xAxis = [];
				const chosenExercise = this.state.data.find(ex => ex.exerciseId === this.state.chosenExercise);
				for (const measurement of chosenExercise.values) {
					xAxis.push(new Date(measurement.creationTime).toDateString());
					yAxis.push(measurement.value);
				}

				return <Chart xAxis={xAxis} yAxis={yAxis} exercise_name={chosenExercise.exercise_name} />
			}

			return (
				<div>
					<form>
						<select onChange={(e) => this.onExerciseChanged(e)}>
							{this.state.data.map(ex => <option key={ex.exerciseId} value={ex.exerciseId}>{ex.exercise_name}</option>)}
						</select>
					</form>
					{renderChart()}
				</div>
			)
		}
	}

	componentDidMount() {

		Axios.get("http://localhost:5000/results/available", { withCredentials: true })
			.then(res => {
				this.setState({
					data: res.data,
					isLoaded: true,
					chosenExercise: res.data.length > 0 ? res.data[0].exerciseId : null
				})
			});
	}
}

export default ChartPage;
