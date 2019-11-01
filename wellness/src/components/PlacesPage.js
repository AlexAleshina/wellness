import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PlacePage.css';

class PlacesPage extends Component {
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
            .get(`${process.env.REACT_APP_server}/places`)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        places: result.data.places
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
        const { error, isLoaded, places } = this.state;
        if (error) {
            return <div>error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>loading...</div>;
        } else {
            return (

                <div className="placeContainer">

                    {places.map(item => (
                        <Link to={`/workout/place/${item._id}`}>
                            <div key={item._id}>
                                {/* {item.name} */}
                                <img className="placeImg" src={item.img_url} alt="place"></img>
                            </div>
                        </Link>
                    ))}
                    {/*                     
                    <h1>PLACES</h1> */}

                </div>
            );
        }
    }
}

export default PlacesPage;