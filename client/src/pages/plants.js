import React from "react";
import API from "../utils/API";

class Plants extends React.Component {
    state = {
        plants: []
    };

    componentDidMount() {
        this.loadPlants();
    }
    loadPlants = () => {
        API.searchPlant()
            .then(res =>
                console.log(res),
                // this.setState({ plants: res.data })
            )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div><h1>Plants page</h1></div>
        )
    }
}

export default Plants;