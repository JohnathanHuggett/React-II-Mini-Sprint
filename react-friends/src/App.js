import React, { Component } from 'react';
import './App.css';
import { people } from './people.js'
import { PeopleList } from './peopleList.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    };
  }

  componentDidMount(){
    this.setState({ People: people})
   
  }


  render() {
    return (
      <div>
        <h1 id="Header">These are my people</h1>
        <PeopleList people={this.state.People} />
      </div>
    )
  }
}

export default App;
