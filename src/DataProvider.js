import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            results: []
        }
    }

    getLove = (fName) => {
        if (fName === undefined) {
            let fName = "asdljflaksdjflasjdfljasdlfkjaslkdjflkasjdflkasjdfkljasdlfjaslkdjflasjdflajdsf"
            axios.get(`https://faroo-faroo-web-search.p.rapidapi.com/api?q=${fName}`, { headers: { "X-RapidAPI-Host": `faroo-faroo-web-search.p.rapidapi.com`, "X-RapidAPI-Key": "9a1acc435amshc5acf60eb3c1540p1902b3jsn37cbe4938949" } }).then(res => {
                this.setState({
                    results: res.data.results
                })
            }).catch(function (error) {
                window.location.reload()
            });
        } else {
            axios.get(`https://faroo-faroo-web-search.p.rapidapi.com/api?q=${fName}`, { headers: { "X-RapidAPI-Host": `faroo-faroo-web-search.p.rapidapi.com`, "X-RapidAPI-Key": "9a1acc435amshc5acf60eb3c1540p1902b3jsn37cbe4938949" } }).then(res => {
                this.setState({
                    results: res.data.results
                })
            }).catch(function (error) {
                window.location.reload()
            });
        }
    }

    render() {
        return (
            <Provider value={{
                getLove: this.getLove,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}