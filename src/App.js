import React from 'react';
import './App.css';
//import { Route, Link } from 'react-router-dom';
import Header from './Header/Header'
import Input from './Input/Input'
import Results from './Results/Results'

const baseUrl = 'https://swapi-thinkful.herokuapp.com/api/';

class App extends React.Component {
  state = {
    results:[],
  }
  
  handleGetState = (x) => {
    this.setState({
      results: x,
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Input handleGetState={this.handleGetState}/>
        <Results results={this.state.results}/>
      </div>
    )
  }
}

export default App;
