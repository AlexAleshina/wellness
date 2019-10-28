import React, { Component } from 'react';
import axios from 'axios';

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
            .get("http://localhost:5000/places")
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
                <ul>
                    <a href="whereId">
                        {places.map(item => (
                            <li key={item._id}>
                                {item.name}
                                <img src={item.img_url} alt="place"></img>
                            </li>
                        ))}
                    </a>
                </ul>
            );
        }
    }
}

export default PlacesPage;