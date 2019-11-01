import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">
                
                <Link to="/stats">
                    <div className="footerElementContainer">
                        <img className="footerImg" src='/footer/stat.png' alt='workouts'></img>
                        <p className="elementP">Statistic</p>
                    </div>
                </Link>
                <Link to="/places">
                    <div className="footerElementContainer">
                        <img className="footerImg" src='/footer/workout.png' alt='workouts'></img>
                        <p className="elementP">Workouts</p>
                    </div>
                </Link>
                <Link onClick={this.props.logout}>
                    <div className="footerElementContainer">
                        <img className="footerImg" src='/footer/logout.png' alt='logout'></img>
                        <p className="elementP">Log out </p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Footer;