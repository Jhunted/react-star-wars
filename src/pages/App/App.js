import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
