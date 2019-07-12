import React, { Component } from "react";
import axios from 'axios';
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
        this.postProduct = this.postProduct.bind(this);
      }

      postProduct() {

          const newProduct = {
              img: this.state.img,
              name: this.state.name,
              price: this.state.price
          };
          axios.post('/api/product', newProduct)
          .then(() => {
              this.setState({
                  img: '',
                  name: '',
                  price: 0
              });
              this.props.getInventory()
          });
      };

      cancelButton() {
          this.setState({
              img : '',
              name: '',
              price: '0'
          });
      };

    render() {
        return(
            <div>
                <div className="input-fields">
                    <input type='text' className="img-url" placeholder="Paste image url" onChange={(e) => this.setState({img: e.target.value})}
                    value={this.state.img}></input>
                    <input type='text' className="name" placeholder="Product Name" onChange={(e) => this.setState({name: e.target.value})}
                    value={this.state.name}></input>
                    <input type='text' className="price" placeholder="Product Price" onChange={(e) => this.setState({price: e.target.value})}
                    value={this.state.price}></input>
                </div>
                <div className="button-container">
                    <button onClick={() => this.cancelButton()}>Cancel</button>
                    <button onClick={() => this.postProduct()}>Add to Inventory</button>
                </div>
            </div>
        )
    };
};