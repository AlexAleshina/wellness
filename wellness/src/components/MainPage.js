import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

    render() {
        return (
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/workouts'>Start</Link>
            </div>
        )
    }
}

export default MainPage;