import React, { Component } from 'react';
import './Person.css'

export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
        };
    }
    componentDidMount() {
        this.setState({person: this.props.person})
    }

    render(){
        return (
            <div className="Person-Box">
                <div>{this.state.person.first_name}</div>
                <div>{this.state.person.last_name}</div>
                <div>{this.state.person.email}</div>
            </div>
        )
   }
}