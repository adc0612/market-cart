import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <li className="habit">
                <span className="product-name">Potato Chips</span>
                <span className="product-count">2</span>
                <button className="habit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Product;