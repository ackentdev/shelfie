import React, { Component } from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        inventory: [
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1kwAEoBbF_UnY-IGkYpkIcrhxhkbZw5FzSatebfWdAq2dYaT',
                name: 'Fingers Crossed',
                price: 4.99
            },
            {
                img: 'data:image/png;base64,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',
                name: 'Isis',
                price: 269.99
            }
        ]
    }
  }
  render() {
    const { inventory } = this.state;
  return (
    <div className="App">
      <Header/>
      <div className="functional-container">
        <Dashboard inventory={inventory}/>
        <Form className="Form"/>
      </div>
    </div>
  );
};
};

export default App;
