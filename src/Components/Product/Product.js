import React from "react";
import "./Product.css";

export default function Product(props) {
    
        return(
            <div className="product-component">
                <img className="product-img" alt="product-img" src={props.product.img}/>
                <div>{props.product.name}</div>
                <div>{props.product.price}</div>
            </div>
        )
    
};