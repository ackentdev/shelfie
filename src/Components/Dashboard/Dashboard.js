import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product"


export default class Dashboard extends Component {
    render() {
        const mappedInventory = this.props.inventory.map(product => {
            return (
                <div key={this.props.inventory.indexOf(product)}>
                    <Product product={product}/>
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