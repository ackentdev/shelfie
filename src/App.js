import React, { Component } from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"

class App extends Component {
  constructor(props){
    super(props)
    this.state = 
    {

    }
  }
  render() {
  return (
    <div className="App">
      <Header/>
      <div className="functional-container">
        <Dashboard/>
        <Form className="Form"/>
      </div>
    </div>
  );
};
};

export default App;
