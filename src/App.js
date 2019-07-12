import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory() {
    axios.get('/api/inventory')
    .then((response) => {
      this.setState({inventory: response.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const { inventory } = this.state;
  return (
    <div className="App">
      <Header/>
      <div className="functional-container">
        <Dashboard getInventory={this.getInventory} inventory={inventory}/>
        <Form getInventory={this.getInventory} className="Form"/>
      </div>
    </div>
  );
};
};

export default App;
