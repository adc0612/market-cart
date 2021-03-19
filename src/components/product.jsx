import React, { Component } from 'react';

class Product extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.product);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.product);
        
    };
    handleDelete = () => {
        this.props.onDelete(this.props.product);
    };
    render() {
        const {name, count} = this.props.product;
        return (
            <li className="product">
                <span className="product-name">{name}</span>
                <span className="product-count">{count}</span>
                <button className="product-button product-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="product-button product-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="product-button product-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Product;