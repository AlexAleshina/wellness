import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';


class MainPage extends Component {

    render() {
        return (
            <div className="mainConteiner">
                <div className="divForName"><h1 className="mainH1">FITNESS ACT</h1></div>
                <div>
                    <div className="started"><Link to="/signup">GET STARTED</Link></div>
                    <div className="login"><Link to="/login">LOGIN</Link></div>
                </div>


            </div>
        )
    }
}

export default MainPage;