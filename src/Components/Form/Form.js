import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            img : '',
            name: '',
            price: 0
        }
        this.cancelButton = this.cancelButton.bind(this);
      }

      cancelButton() {
          this.setState({
              img : '',
              name: '',
              price: '0'
          })
      };

    render() {
        return(
            <div>
                <div className="input-fields">
                    <input type='text' className="img-url" onChange={(e) => this.setState({img: e.target.value})}
                    value={this.state.img}></input>
                    <input type='text' className="name" onChange={(e) => this.setState({name: e.target.value})}
                    value={this.state.name}></input>
                    <input type='text' className="price" onChange={(e) => this.setState({price: e.target.value})}
                    value={this.state.price}></input>
                </div>
                <div className="button-container">
                    <button onClick={() => this.cancelButton()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    };
};