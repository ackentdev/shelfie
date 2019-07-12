import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product"
import axios from "axios";


export default class Dashboard extends Component {

    deletePost(id){
        axios.delete(`/api/product/${id}`)
        .then(() => {
            this.props.getInventory();
        })
    }

    render() {
        const mappedInventory = this.props.inventory.map(product => {
            return (
                <div key={this.props.inventory.indexOf(product)}>
                    <Product product={product}/>
                    <button onClick={() => this.deletePost(product.id)}>Delete</button>
                    <button>Edit</button>
                </div>
            );
        });
        return(
            <div>
                {mappedInventory}
            </div>
        )
    };
};