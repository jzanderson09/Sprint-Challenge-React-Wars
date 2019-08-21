import React, { Component } from 'react';
import './App.css';

import StarWars from './components/StarWars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  //toggleMenu for each character:
  toggleMenu = event => {
    console.log(event.target);
    if (event.target.className === 'char menu-toggle') {
      event.target.className = 'char';
    }
    else if (event.target.className === 'char') {
      event.target.className = 'char menu-toggle';
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars 
        chars={this.state.starwarsChars} 
        toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default App;
