import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product"


export default class Dashboard extends Component {
    render() {
        return(
            <div>
                <span>Dashboard</span>
                <Product/>
            </div>
        )
    };
};